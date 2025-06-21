import React, { useCallback, useState } from 'react';
import Section from './shared/Section';
import { MY_NAME } from '../constants'; 
import { AboutMeIcons } from './icons/AboutMeIcons';

const AboutMeSection: React.FC<{ id: string }> = ({ id }) => {
  const professionalPhotoUrl = "/images/about_me/profile_photo.png";
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <Section 
      id={id} 
      title="// About Me" 
      className="bg-code-bg-secondary dark:bg-dark-code-bg-secondary" 
    >
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1">
          <div className="relative w-56 h-56 md:w-full md:h-auto mx-auto">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-code-border dark:bg-dark-code-border animate-pulse rounded-sm" />
            )}
            <img 
              src={professionalPhotoUrl}
              alt={`Professional photo of ${MY_NAME}`} 
              className={`rounded-sm shadow-code-card dark:shadow-dark-code-card w-full h-full object-cover transform hover:opacity-90 transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              decoding="async"
              onLoad={handleImageLoad}
              style={{ aspectRatio: '1/1' }}
            />
          </div>
          {/* Comment info below image - always visible */}
          <div className="mt-3 flex justify-center">
            <div className="bg-code-bg-secondary dark:bg-dark-code-bg-secondary border border-code-border dark:border-dark-code-border rounded-sm px-3 py-2 shadow-lg">
              <span className="text-xs text-code-accent-comment dark:text-dark-code-accent-comment font-mono">
                /* Image generated using Flux-dev */
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 text-md text-code-text-primary dark:text-dark-code-text-primary space-y-4">
          <p>
            So, you want to know a bit more about me? Awesome! The 'me' in question is <span className="font-semibold text-code-accent-variable dark:text-dark-code-accent-variable">{MY_NAME}</span>, 
            a software engineer who honestly just really loves figuring things out and is always curious about what's new in tech. For me, the best part of software development is that awesome 
            feeling of taking a tricky problem and turning it into a solution that’s smart, works smoothly, and actually makes sense for the people using it.
          </p>
            <AboutMeIcons.PersonFrameIcon className="w-10 h-10 text-code-accent-keyword dark:text-dark-code-accent-keyword block mx-auto mb-2" />
          <p>
            You might be wondering about the image accompanying this section and what it has to do with me. 
            Well, for me, it captures the very essence of my coding experience: that state of deep immersion 
            where I'm completely focused, almost like gazing out at an inspiring, expansive landscape. 
            That sense of vastness and potential in the view mirrors the satisfaction I find in tackling 
            complex challenges. And the sunset? That symbolizes the profound clarity and rewarding feeling 
            when an elegant solution finally emerges, bringing a beautiful light to intricate problems. 
            It’s in these moments of intense focus and subsequent clarity, akin to watching a sunset after 
            a challenging climb, that my passion for technology truly ignites. This is why you'll often find 
            this image as my profile icon across many of my accounts – it truly represents my journey and joy in software development.
          </p>
          <AboutMeIcons.SelfImprovementIcon className="w-10 h-10 text-code-accent-keyword dark:text-dark-code-accent-keyword block mx-auto mb-2" />
          <p>
            I’m definitely in my element when I get to keep learning and rolling with new things. 
            So, whether it's getting the hang of a new programming language, playing around with 
            the latest frameworks, or digging into different ways to build software, I'm always up for it. 
            I jump at any chance to broaden my skills and see things from a new angle. My aim isn't just to 
            churn out lines of code; it's about building experiences and tools that genuinely help people 
            and make a real difference.
          </p>
          <AboutMeIcons.HandshakeIcon className="w-10 h-10 text-code-accent-keyword dark:text-dark-code-accent-keyword block mx-auto mb-2" />
          <p>
            And it's not all about the tech side of things for me. I'm a big believer in teamwork, 
            making sure we're all talking the same language, and really focusing on putting out quality work. 
            I’m always keen to connect with other tech fans, kick around new ideas, or see if there’s a 
            cool project we could tackle together.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;