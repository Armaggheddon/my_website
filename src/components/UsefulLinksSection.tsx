import React from 'react';
import { UsefulLink } from '../types';
import Section from './shared/Section';
import UsefulLinkCard from './UsefulLinkCard';

interface UsefulLinksSectionProps {
  id: string;
  links: UsefulLink[];
}

const UsefulLinksSection: React.FC<UsefulLinksSectionProps> = ({ id, links }) => {
  return (
    <Section 
      id={id} 
      title="// Curated Resources" 
      subtitle="A collection of insightful blogs, tools, and platforms I find valuable."
      className="bg-code-bg dark:bg-dark-code-bg" // Using main bg
    >
      {links.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {links.map((link) => (
            <UsefulLinkCard key={link.id} link={link} />
          ))}
        </div>
      ) : (
         <p className="text-left text-code-text-secondary dark:text-dark-code-text-secondary text-md">/* No links to display. Check back later. */</p>
      )}
    </Section>
  );
};

export default UsefulLinksSection;