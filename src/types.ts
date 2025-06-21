export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  imageUrl?: string; // Deprecated: kept for backward compatibility
  images?: string[]; // New: Support for multiple images
  cardImage?: string; // New: Optional image optimized for card display (overrides first image)
  logoUrl?: string; // New: Logo image that displays unscaled
  isTextLikeLogo?: boolean; // New: Indicates if logo should be displayed larger for text-like logos
  displayPopupTextTitle?: boolean; // New: Controls whether to show title text in popup header
  role?: string; // New: Describes the user's role in the project
  keyFeatures?: string[]; // New: Lists key features or challenges
  impact?: string; // New: Describes the project's impact or outcome
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

// Added UsefulLink interface
export interface UsefulLink {
  id: string;
  url: string;
  title: string;
  description?: string;
  category?: string;
}