import React from 'react';
import { UsefulLink } from '../types';
import LinkIcon from './icons/LinkIcon'; 
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const UsefulLinkCard: React.FC<{ link: UsefulLink }> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-code-bg-secondary dark:bg-dark-code-bg-secondary rounded-sm shadow-code-card dark:shadow-dark-code-card hover:shadow-code-subtle dark:hover:shadow-dark-code-subtle transition-all duration-200 group border border-transparent hover:border-code-border dark:hover:border-dark-code-border"
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5 p-1.5 bg-code-accent-keyword/10 dark:bg-dark-code-accent-keyword/10 rounded-sm">
          <LinkIcon className="h-4 w-4 text-code-accent-keyword dark:text-dark-code-accent-keyword" />
        </div>
        <div className="flex-1">
          <h4 className="text-md font-semibold text-code-text-primary dark:text-dark-code-text-primary group-hover:text-code-accent-keyword dark:group-hover:text-dark-code-accent-keyword transition-colors">
            {link.title}
          </h4>
          {link.description && (
            <p className="text-xs text-code-text-secondary dark:text-dark-code-text-secondary mt-1 leading-relaxed">{link.description}</p>
          )}
          {link.category && (
            <span className="mt-2 inline-block px-1.5 py-0.5 text-xs font-medium bg-code-bg dark:bg-dark-code-bg text-code-accent-comment dark:text-dark-code-accent-comment rounded-sm border border-code-border dark:border-dark-code-border">
              {link.category}
            </span>
          )}
        </div>
         <ExternalLinkIcon className="h-4 w-4 text-code-text-secondary/70 dark:text-dark-code-text-secondary/70 group-hover:text-code-accent-keyword dark:group-hover:text-dark-code-accent-keyword transition-colors flex-shrink-0 mt-0.5" />
      </div>
    </a>
  );
};

export default UsefulLinkCard;