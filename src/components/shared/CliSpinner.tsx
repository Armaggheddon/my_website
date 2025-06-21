import React, { useState, useEffect } from 'react';

interface CliSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CliSpinner: React.FC<CliSpinnerProps> = ({ className = '', size = 'md' }) => {
  const [currentSpinner, setCurrentSpinner] = useState(0);
  const spinnerChars = ['|', '/', '-', '\\'];
  
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpinner((prev) => (prev + 1) % spinnerChars.length);
    }, 150); // Spin every 150ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`font-mono select-none ${sizeClasses[size]} ${className}`}
      aria-label="Loading"
    >
      {spinnerChars[currentSpinner]}
    </span>
  );
};

export default CliSpinner;
