import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Button from './shared/Button';
import UserCircleIcon from './icons/UserCircleIcon';

interface HeroSectionProps {
  id: string;
  myName: string;
  tagline: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id, myName, tagline }) => {
  const taglines = useMemo(() => [
    'Passionately turning tricky puzzles into elegant, impactful code.',
    'Finding the spark in complex challenges, building solutions that matter.',
    'Coding with curiosity, embracing challenges, and building solutions with a human touch.',
    'I love a good challenge! Crafting elegant code that solves real problems.'
  ], []);

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [nextTaglineIndex, setNextTaglineIndex] = useState(1);
  const [animationPhase, setAnimationPhase] = useState<'stable' | 'transitioning'>('stable');

  const updateTagline = useCallback(() => {
    setAnimationPhase('transitioning');
    
    // Remove requestAnimationFrame to reduce INP
    setTimeout(() => {
      setCurrentTaglineIndex(nextTaglineIndex);
      setNextTaglineIndex((nextTaglineIndex + 1) % taglines.length);
      setAnimationPhase('stable');
    }, 700); // Match CSS transition duration
  }, [nextTaglineIndex, taglines.length]);

  useEffect(() => {
    const interval = setInterval(updateTagline, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [updateTagline]);

  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center bg-code-bg dark:bg-dark-code-bg relative overflow-hidden pt-16 md:pt-20" // Use main bg
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 animate-fade-in-up">
          <span className="block text-lg sm:text-xl md:text-2xl text-code-accent-string dark:text-dark-code-accent-string font-medium mb-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            👋 Hey there! I'm
          </span>
          <span className="block text-code-text-primary dark:text-dark-code-text-primary">{myName}</span>
          <span className="block text-code-accent-keyword dark:text-dark-code-accent-keyword mt-1 sm:mt-2">Software Engineer</span>
        </h1>
        <div className="relative h-20 md:h-16 mb-8 flex items-center justify-center overflow-hidden">
          {/* Current tagline - slides down when transitioning */}
          <p 
            key={`current-${currentTaglineIndex}`}
            className={`absolute inset-0 text-md sm:text-lg md:text-xl text-code-accent-comment dark:text-dark-code-accent-comment max-w-3xl mx-auto flex items-center justify-center transition-all duration-700 ease-in-out ${
              animationPhase === 'transitioning'
                ? 'opacity-0 transform translate-y-12' 
                : 'opacity-100 transform translate-y-0'
            }`}
          >
            /* {taglines[currentTaglineIndex]} */
          </p>
          
          {/* Next tagline - slides in from top when transitioning */}
          <p 
            key={`next-${nextTaglineIndex}`}
            className={`absolute inset-0 text-md sm:text-lg md:text-xl text-code-accent-comment dark:text-dark-code-accent-comment max-w-3xl mx-auto flex items-center justify-center transition-all duration-700 ease-in-out ${
              animationPhase === 'transitioning'
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform -translate-y-12'
            }`}
          >
            /* {taglines[nextTaglineIndex]} */
          </p>
        </div>
        <div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in-up" 
          style={{animationDelay: '0.4s'}}
        >
          <Button href="#projects" variant="primary" size="md">
            {'>'} View My Work
          </Button>
          <Button href="#about" variant="outline" size="md" leftIcon={<UserCircleIcon className="h-4 w-4"/>}>
            About Me
          </Button>
        </div>
      </div>
       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll to about section">
          <svg 
            className="w-6 h-6 text-code-accent-keyword dark:text-dark-code-accent-keyword" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;