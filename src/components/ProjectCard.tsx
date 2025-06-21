import React, {useMemo, useState} from 'react';
import { Project } from '../types';
import Button from './shared/Button';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const [logoAspectRatio, setLogoAspectRatio] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleCardClick = () => {
    onViewDetails(project);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onViewDetails(project);
    }
  };

  const primaryImage = useMemo(() => {
    return project.images && project.images.length > 0
      ? project.images[0]
      : project.imageUrl;
  }, [project.images, project.imageUrl]);

  const isTextLikeLogo = useMemo(() => {
    return project.isTextLikeLogo === true || 
      (project.isTextLikeLogo !== false && logoAspectRatio !== null && logoAspectRatio > 2.5);
  }, [project.isTextLikeLogo, logoAspectRatio]);

  const logoSizeClasses = useMemo(() => {
    return isTextLikeLogo 
      ? "max-w-80 max-h-24 object-contain" // Larger horizontal space for text-like logos
      : "max-w-32 max-h-32 object-contain"; // Standard size for icon/symbol logos
  }, [isTextLikeLogo]);

  return (
    <div
      className="bg-code-bg-secondary dark:bg-dark-code-bg-secondary rounded-sm shadow-code-card dark:shadow-dark-code-card flex flex-col h-full transition-all duration-300 cursor-pointer focus:outline-none border border-transparent hover:shadow-[0_0_8px_2px_rgba(0,92,197,0.5)] dark:hover:shadow-[0_0_8px_2px_rgba(88,166,255,0.5)] focus-visible:ring-2 focus-visible:ring-code-accent-keyword dark:focus-visible:ring-dark-code-accent-keyword focus-visible:ring-offset-2 focus-visible:ring-offset-code-bg dark:focus-visible:ring-offset-dark-code-bg"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      {(primaryImage || project.logoUrl) && (
        <div className="relative w-full h-48 overflow-hidden border-b border-code-border dark:border-dark-code-border">
          {/* Background image */}
          {primaryImage && (
            <>
              {!imageLoaded && (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
              )}
              <img
                src={primaryImage}
                alt={`${project.title} preview`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? (project.logoUrl ? 'opacity-50 blur-sm' : 'opacity-100') : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </>
          )}

          {/* Logo overlay if available */}
          {project.logoUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-black/70">
              <img
                src={project.logoUrl}
                alt={`${project.title} logo`}
                className={logoSizeClasses}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  if (img.naturalWidth && img.naturalHeight) {
                    setLogoAspectRatio(img.naturalWidth / img.naturalHeight);
                  }
                }}
              />
            </div>     
          )}

          {/* Multiple images indicator */}
          {project.images && project.images.length > 1 && (
            <div className="absolute top-2 right-2 bg-code-bg/80 dark:bg-dark-code-bg/80 backdrop-blur-sm rounded-sm px-2 py-1">
              <span className="text-xs text-code-text-primary dark:text-dark-code-text-primary font-medium">
                +{project.images.length - 1} more
              </span>
            </div>
          )}
          
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-code-text-primary dark:text-dark-code-text-primary mb-2">{project.title}</h3>
        <p className="text-code-text-secondary dark:text-dark-code-text-secondary text-xs mb-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="my-4">
          <p className="text-xs font-medium text-code-text-secondary dark:text-dark-code-text-secondary mb-1.5"> // Tech Stack:</p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => ( // Show a limited number of techs on card
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium bg-code-accent-string/10 text-code-accent-string dark:bg-dark-code-accent-string/10 dark:text-dark-code-accent-string rounded-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
                 <span className="px-2 py-0.5 text-xs font-medium bg-code-accent-string/10 text-code-accent-string dark:bg-dark-code-accent-string/10 dark:text-dark-code-accent-string rounded-sm">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2 border-t border-code-border/50 dark:border-dark-code-border/50">
          {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
            <Button
              href={project.liveDemoUrl}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<ExternalLinkIcon className="h-3.5 w-3.5" />}
              onClick={(e) => e.stopPropagation()} // Prevent card click from triggering modal
              onKeyDown={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()} // Prevent card click from triggering modal
              onKeyDown={(e) => e.stopPropagation()}
               aria-label={`View source code for ${project.title}`}
            >
              View Code
            </Button>
          )}
           <Button
              variant="primary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click default
                handleCardClick(); // Trigger modal
              }}
              onKeyDown={(e) => {
                 if (e.key === 'Enter' || e.key === ' ') {
                    e.stopPropagation();
                    handleCardClick();
                 }
              }}
              className="ml-auto" // Push to the right if space
            >
              Details
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
