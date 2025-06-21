
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Project } from '../types';
import Button from './shared/Button';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import XIcon from './icons/XIcon';
import AsyncImage from './shared/AsyncImage';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const [logoAspectRatio, setLogoAspectRatio] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get all available images (prioritize images array, fallback to imageUrl)
  const allImages = useMemo(() => {
    if (project.images && project.images.length > 0) {
      return project.images;
    }
    if (project.imageUrl) {
      return [project.imageUrl];
    }
    return [];
  }, [project.images, project.imageUrl]);

  const hasMultipleImages = allImages.length > 1;

  // Memoized handlers for better performance
  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => prev === 0 ? allImages.length - 1 : prev - 1);
  }, [allImages.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => prev === allImages.length - 1 ? 0 : prev + 1);
  }, [allImages.length]);

  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  const handleMainImageLoad = useCallback(() => {
    // Image loaded successfully
  }, []);

  const handleLogoLoad = useCallback((dimensions?: { width: number; height: number }) => {
    if (dimensions?.width && dimensions?.height) {
      setLogoAspectRatio(dimensions.width / dimensions.height);
    }
  }, []);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project.id]);

  const isTextLikeLogo = useMemo(() => {
    return project.isTextLikeLogo === true || 
      (project.isTextLikeLogo !== false && logoAspectRatio !== null && logoAspectRatio > 2.5);
  }, [project.isTextLikeLogo, logoAspectRatio]);

  const logoSizeClasses = useMemo(() => {
    return isTextLikeLogo 
      ? "max-w-60 max-h-8 object-contain" // Larger size for text-like logos in header
      : "max-w-8 max-h-8 object-contain"; // Icon size for regular logos in header
  }, [isTextLikeLogo]);

  useEffect(() => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      
      // Image navigation with arrow keys
      if (hasMultipleImages) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          handlePrevImage();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          handleNextImage();
        }
      }
      
      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      lastFocusedElementRef.current?.focus();
    };
  }, [onClose, hasMultipleImages, handlePrevImage, handleNextImage]);

  // Prevent background scroll - managed by ProjectsSection
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = '';
  //   };
  // }, []);


  const stopPropagation = (e: React.MouseEvent | React.KeyboardEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-[60] bg-code-bg/80 dark:bg-dark-code-bg/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up"
      style={{animationDuration: '0.3s'}}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
      aria-describedby={`modal-description-${project.id}`}
    >
      <div
        ref={modalRef}
        className="bg-code-bg-secondary dark:bg-dark-code-bg-secondary rounded-sm shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-code-border dark:border-dark-code-border"
        onClick={stopPropagation} // Prevent clicks inside modal from closing it
      >
        <header className="flex items-center justify-between p-4 border-b border-code-border dark:border-dark-code-border sticky top-0 bg-code-bg-secondary dark:bg-dark-code-bg-secondary z-10">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {project.logoUrl && (
              <AsyncImage
                src={project.logoUrl}
                alt={`${project.title} logo`}
                className={logoSizeClasses}
                onLoad={handleLogoLoad}
              />
            )}
            {(!project.logoUrl || !isTextLikeLogo) && (
              <h2 id={`modal-title-${project.id}`} className="text-xl font-semibold text-code-text-primary dark:text-dark-code-text-primary truncate">
                {project.title}
              </h2>
            )}
          </div>
          <Button
            ref={closeButtonRef}
            onClick={onClose}
            variant="secondary"
            size="sm"
            aria-label="Close project details"
            className="!p-1.5 ml-2 flex-shrink-0"
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </header>

        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          {allImages.length > 0 && (
            <div className="mb-4">
              {/* Main Image Display */}
              <div className="relative">
                <AsyncImage
                  src={allImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-72 object-contain rounded-sm border border-code-border dark:border-dark-code-border bg-code-bg dark:bg-dark-code-bg"
                  onLoad={handleMainImageLoad}
                />
                
                {/* Navigation arrows for multiple images */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-code-bg/80 dark:bg-dark-code-bg/80 backdrop-blur-sm border border-code-border dark:border-dark-code-border rounded-full p-2 hover:bg-code-bg-secondary dark:hover:bg-dark-code-bg-secondary transition-colors"
                      aria-label="Previous image"
                    >
                      <svg className="w-4 h-4 text-code-text-primary dark:text-dark-code-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-code-bg/80 dark:bg-dark-code-bg/80 backdrop-blur-sm border border-code-border dark:border-dark-code-border rounded-full p-2 hover:bg-code-bg-secondary dark:hover:bg-dark-code-bg-secondary transition-colors"
                      aria-label="Next image"
                    >
                      <svg className="w-4 h-4 text-code-text-primary dark:text-dark-code-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Image counter */}
                {hasMultipleImages && (
                  <div className="absolute bottom-2 right-2 bg-code-bg/80 dark:bg-dark-code-bg/80 backdrop-blur-sm border border-code-border dark:border-dark-code-border rounded-sm px-2 py-1">
                    <span className="text-xs text-code-text-secondary dark:text-dark-code-text-secondary">
                      {currentImageIndex + 1} / {allImages.length}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Thumbnail gallery */}
              {hasMultipleImages && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`flex-shrink-0 rounded-sm border-2 transition-all overflow-hidden ${
                        index === currentImageIndex
                          ? 'border-code-accent-keyword dark:border-dark-code-accent-keyword shadow-md'
                          : 'border-code-border dark:border-dark-code-border hover:border-code-text-secondary dark:hover:border-dark-code-text-secondary'
                      } ${isTextLikeLogo ? 'w-24 h-12' : 'w-16 h-12'}`}
                    >
                      <AsyncImage
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        className={`${isTextLikeLogo ? 'w-24 h-12 object-contain' : 'w-16 h-12 object-cover'} bg-code-bg dark:bg-dark-code-bg`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Apply prose classes for typography styling, ensuring it respects theme colors */}
          <div id={`modal-description-${project.id}`} className="mb-4 prose dark:prose-invert prose-sm max-w-none text-code-text-secondary dark:text-dark-code-text-secondary">
            {/* The <p> inside here will be styled by prose, but we can override color if needed */}
            <p className="text-current">{project.description}</p> 
          </div>

          {project.role && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-code-accent-comment dark:text-dark-code-accent-comment mb-1">
                // My Role:
              </h4>
              <p className="text-sm text-code-text-secondary dark:text-dark-code-text-secondary leading-relaxed">{project.role}</p>
            </div>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-code-accent-comment dark:text-dark-code-accent-comment mb-1">
                // Key Features & Challenges:
              </h4>
              <ul className="list-none pl-0 space-y-1">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-sm text-code-text-secondary dark:text-dark-code-text-secondary leading-relaxed flex">
                    <span className="text-code-accent-variable dark:text-dark-code-accent-variable mr-2 select-none shrink-0">&gt;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.impact && (
             <div className="mb-4">
              <h4 className="text-sm font-medium text-code-accent-comment dark:text-dark-code-accent-comment mb-1">
                // Outcome / Impact:
              </h4>
              <p className="text-sm text-code-text-secondary dark:text-dark-code-text-secondary leading-relaxed">{project.impact}</p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium text-code-accent-comment dark:text-dark-code-accent-comment mb-1.5">
              // Tech Stack Used:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-medium bg-code-accent-string/10 text-code-accent-string dark:bg-dark-code-accent-string/10 dark:text-dark-code-accent-string rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <footer className="p-4 border-t border-code-border dark:border-dark-code-border flex flex-wrap gap-3 justify-end sticky bottom-0 bg-code-bg-secondary dark:bg-dark-code-bg-secondary z-10">
          {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
            <Button
              href={project.liveDemoUrl}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<ExternalLinkIcon className="h-3.5 w-3.5" />}
              aria-label={`View live demo for ${project.title}`}
            >
              Live Demo
            </Button>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<GitHubIcon className="h-3.5 w-3.5" />}
              aria-label={`View source code for ${project.title}`}
            >
              View Code
            </Button>
          )}
          <Button onClick={onClose} variant="primary" size="sm">
            Close
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetailModal;