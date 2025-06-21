import React from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import Section from './shared/Section'; 

interface ContactFooterProps {
  id: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  myName: string;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ id, socialLinks, myName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Section 
      id={id} 
      className="bg-code-bg-secondary dark:bg-dark-code-bg-secondary !py-10 md:!py-12 border-t border-code-border dark:border-dark-code-border"
      title="// Get In Touch"
      subtitle="Whether it's a new project, an interesting idea, or you're just up for a good tech chat, my door's always open. Feel free to send a message my way!"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-5 mb-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-code-text-secondary dark:text-dark-code-text-secondary hover:text-code-accent-keyword dark:hover:text-dark-code-accent-keyword transition-colors duration-200"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-code-text-secondary dark:text-dark-code-text-secondary hover:text-code-accent-keyword dark:hover:text-dark-code-accent-keyword transition-colors duration-200"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href={socialLinks.email}
            aria-label="Send an Email"
            className="text-code-text-secondary dark:text-dark-code-text-secondary hover:text-code-accent-keyword dark:hover:text-dark-code-accent-keyword transition-colors duration-200"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </div>

        <div className="border-t border-code-border dark:border-dark-code-border pt-6 mt-8">
          <p className="text-xs text-code-text-secondary dark:text-dark-code-text-secondary">
            &copy; {currentYear} {myName}. All rights reserved.
          </p>
          <p className="text-xs text-code-accent-comment dark:text-dark-code-accent-comment mt-1">
            // Designed &amp; Developed with &lt;3 by {myName}.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ContactFooter;