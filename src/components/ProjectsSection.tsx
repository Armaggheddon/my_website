import React, { useState, useCallback } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import Section from './shared/Section';
import ProjectDetailModal from './ProjectDetailModal'; // Import the new modal component
import SeeMoreProjectsSection from './SeeMoreProjectsSection';
import Button from './shared/Button'; // Added import for Button
import { MY_GITHUB_USERNAME, MY_HUGGINGFACE_USERNAME } from '@/src/constants';

interface ProjectsSectionProps {
  id: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleViewDetails = useCallback((project: Project) => {
    setSelectedProject(project);
    // Calculate scrollbar width and add padding to body
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = ''; // Restore background scroll
    document.body.style.paddingRight = ''; // Remove padding
  }, []);

  const toggleProjects = () => setShowAllProjects(prev => !prev);

  const INITIAL_PROJECT_COUNT = 6;
  const initialProjects = projects.slice(0, INITIAL_PROJECT_COUNT);
  const additionalProjects = projects.slice(INITIAL_PROJECT_COUNT);
  const hasMoreProjects = additionalProjects.length > 0;

  return (
    <Section
      id={id}
      title="// My Work"
      subtitle="A selection of projects I've developed, demonstrating practical application of my skills in creating software and solving problems."
      className="bg-code-bg dark:bg-dark-code-bg"
    >
      {projects.length > 0 ? (
        <>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {initialProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
            ))}
          </div>

          {/* Animated container for additional projects */}
          {hasMoreProjects && (
            <div
              className={`
                grid md:grid-cols-2 gap-6 md:gap-8 transition-all duration-500 ease-in-out
                ${showAllProjects 
                  ? 'mt-6 md:mt-8 opacity-100 scale-100' 
                  : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }
              `}
              style={{
                transformOrigin: 'top center',
                maxHeight: showAllProjects ? '2000px' : '0px',
                overflow: showAllProjects ? 'visible' : 'hidden'
              }}
            >
              {additionalProjects.map((project) => (
                <div
                  key={project.id}
                  className={`
                    transition-all duration-500 ease-out
                    ${showAllProjects 
                      ? 'opacity-100' 
                      : 'opacity-0'
                    }
                  `}
                >
                  <ProjectCard project={project} onViewDetails={handleViewDetails} />
                </div>
              ))}
            </div>
          )}

          {hasMoreProjects && (
            <div className="text-center my-6 md:my-8">
              <Button
                variant="outline"
                onClick={toggleProjects}
                className="bg-primary text-currentColor hover:bg-primary-dark dark:bg-dark-primary dark:hover:bg-dark-primary-light py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out flex items-center justify-center space-x-2"
              >
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ease-in-out text-code-accent-keyword dark:text-dark-code-accent-keyword ${
                      showAllProjects ? '-rotate-90' : 'rotate-90'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.58Z" />
                </svg>
                <span>
                  {showAllProjects
                    ? 'Show Less'
                    : `Show ${additionalProjects.length} More`}
                </span>
              </Button>
            </div>
          )}
        </>
      ) : (
        <p className="text-left text-code-text-secondary dark:text-dark-code-text-secondary text-md">/* No projects to display at the moment. Check back soon! */</p>
      )}

      <SeeMoreProjectsSection
        githubUrl={`https://github.com/${MY_GITHUB_USERNAME}`}
        huggingFaceUrl={`https://huggingface.co/${MY_HUGGINGFACE_USERNAME}`}
      />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </Section>
  );
};

export default ProjectsSection;
