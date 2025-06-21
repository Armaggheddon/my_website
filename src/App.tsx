
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import ContactFooter from './components/ContactFooter';
import { PROJECTS_DATA, NAV_LINKS, MY_NAME, MY_TAGLINE, SOCIAL_LINKS } from './constants';
// To use UsefulLinksSection, uncomment the following lines:
// import UsefulLinksSection from './components/UsefulLinksSection'; 
// import { USEFUL_LINKS_DATA } from './constants';


export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Default for SSR or non-browser environments
  });

  // Console easter egg - runs once when the app loads
  useEffect(() => {
    // Prevent duplicate logging in React StrictMode
    if (!(window as any).easterEggLogged) {
      (window as any).easterEggLogged = true;
      console.log("%c👋 Hey there, fellow code explorer!", "font-size: 1.2em; color: #87CEEB;"); // Light blue color
      console.log("Spotted this, did you? You've got a curious mind – I like that!");
      console.log("If you enjoy crafting elegant solutions as much as I do, let's connect:");
      console.log(`🔗 GitHub: ${SOCIAL_LINKS.github}`);
      console.log(`🔗 LinkedIn: ${SOCIAL_LINKS.linkedin}`);
      console.log("%cKeep building amazing things! ✨", "font-style: italic; color: #FFD700;"); // Gold color
    }
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Simplified: just toggle the theme state.
    // CSS transitions will handle the smooth color changes.
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navLinks={NAV_LINKS} myName={MY_NAME} currentTheme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <HeroSection id="home" myName={MY_NAME} tagline={MY_TAGLINE} />
        <AboutMeSection id="about" />
        <ProjectsSection id="projects" projects={PROJECTS_DATA} />
        {/* To re-enable UsefulLinksSection, uncomment the following: */}
        {/* <UsefulLinksSection id="resources" links={USEFUL_LINKS_DATA} /> */}
      </main>
      <ContactFooter id="contact" socialLinks={SOCIAL_LINKS} myName={MY_NAME} />
    </div>
  );
};

export default App;