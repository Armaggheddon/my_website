import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  title, 
  titleClassName = '',
  subtitle,
  subtitleClassName = '' 
}) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}> {/* Slightly reduced padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> {/* Changed max-w-5xl to max-w-7xl */}
        {title && (
          <div className="text-left mb-10 md:mb-12"> {/* Align title left */}
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-medium text-code-accent-comment dark:text-dark-code-accent-comment ${titleClassName}`}>
              {/* Users can add '// ' to title string if desired, e.g. title="// About Me" */}
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-3 text-md sm:text-lg text-code-text-secondary dark:text-dark-code-text-secondary max-w-3xl ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;