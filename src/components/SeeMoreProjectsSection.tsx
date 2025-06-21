import React from 'react';
import Button from './shared/Button';
import GitHubIcon from './icons/GitHubIcon';
import HuggingFaceIcon from './icons/HuggingFaceIcon';

interface SeeMoreProjectsSectionProps {
  githubUrl: string;
  huggingFaceUrl: string;
}

const SeeMoreProjectsSection: React.FC<SeeMoreProjectsSectionProps> = ({ 
  githubUrl, 
  huggingFaceUrl 
}) => {
  return (
    <div className="mt-12 pt-8 border-t border-code-border/50 dark:border-dark-code-border/50">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-code-text-primary dark:text-dark-code-text-primary mb-3">
          // See More Projects
        </h3>
        <p className="text-code-text-secondary dark:text-dark-code-text-secondary mb-6 max-w-2xl mx-auto">
          Curious about the full stack? My GitHub holds the complete codebase, and Hugging Face showcases my ML models and datasets. Dive in – there's more in the `main` branch!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            href={githubUrl}
            variant="secondary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<GitHubIcon className="h-4 w-4" />}
            aria-label="View all projects on GitHub"
            className="!bg-gray-900 !text-white !border-gray-700 hover:!bg-gray-800 dark:!bg-gray-800 dark:hover:!bg-gray-700 dark:!border-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:!bg-opacity-90"
          >
            View All on GitHub
          </Button>
          <Button
            href={huggingFaceUrl}
            variant="outline"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<HuggingFaceIcon className="h-4 w-4" />}
            aria-label="View machine learning projects on Hugging Face"
            className="!bg-gradient-to-r !from-orange-400 !to-yellow-400 !text-gray-900 !border-transparent hover:!from-orange-500 hover:!to-yellow-500 dark:!from-orange-500 dark:!to-yellow-500 dark:hover:!from-orange-600 dark:hover:!to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl !font-semibold relative overflow-hidden before:absolute before:inset-0 before:bg-black/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
          >
            ML Projects on Hugging Face
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeeMoreProjectsSection;
