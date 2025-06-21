import React, { useState, useEffect, useCallback } from 'react';
import CliSpinner from './CliSpinner';

interface AsyncImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: React.ReactNode;
  onLoad?: (dimensions?: { width: number; height: number }) => void;
  onError?: () => void;
}

// Global cache to track loaded images
const imageCache = new Set<string>();

const AsyncImage: React.FC<AsyncImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError
}) => {
  // Check if image is already cached to avoid showing loading spinner
  const [isLoading, setIsLoading] = useState(!imageCache.has(src));
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(imageCache.has(src) ? src : null);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    // Add to cache when successfully loaded
    imageCache.add(src);
    // Note: dimensions will be passed when the actual img element loads
    onLoad?.();
  }, [onLoad, src]);

  const handleImageError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    // If image is already cached, show it immediately
    if (imageCache.has(src)) {
      setImageSrc(src);
      setIsLoading(false);
      setHasError(false);
      // Still call onLoad for consistency
      onLoad?.();
      return;
    }

    setIsLoading(true);
    setHasError(false);
    
    // Create a new image instance to preload
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      handleImageLoad();
    };
    
    img.onerror = () => {
      handleImageError();
    };
    
    // Start loading the image
    img.src = src;

    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, handleImageLoad, handleImageError, onLoad]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center bg-code-bg dark:bg-dark-code-bg border border-code-border dark:border-dark-code-border ${className}`}>
        {placeholder || (
          <div className="flex items-center justify-center p-4">
            <CliSpinner size="md" className="text-code-accent-keyword dark:text-dark-code-accent-keyword" />
          </div>
        )}
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-code-bg dark:bg-dark-code-bg border border-code-border dark:border-dark-code-border ${className}`}>
        <div className="flex flex-col items-center justify-center p-4 text-code-text-secondary dark:text-dark-code-text-secondary">
          <span className="text-xs font-mono">// Failed to load image</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc || src}
      alt={alt}
      className={className}
      onLoad={(e) => {
        const img = e.currentTarget;
        if (img.naturalWidth && img.naturalHeight) {
          onLoad?.({ width: img.naturalWidth, height: img.naturalHeight });
        } else {
          onLoad?.();
        }
      }}
      onError={handleImageError}
    />
  );
};

export default AsyncImage;
