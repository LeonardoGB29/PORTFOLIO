export type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "link"
  | "no-color";

export interface SiteSectionFlags {
  showAbout: boolean;
  showSkills: boolean;
  showExperience: boolean;
  showProjects: boolean;
}

export interface SiteInfo {
  name: string;
  nickname: string;
  role: string;
  siteUrl: string;
  email: string;
  location: string;
  birthDate: string;
  introKicker: string;
  introDisplayName: string;
  introImage: string;
  introImageAlt: string;
  heroTitleTop: string;
  heroTitleBottom: string;
  heroSummary: string;
  heroCodeLines: string[];
  aboutHeadline: string;
  aboutLeftTitle: string;
  aboutLeftItems: string[];
  aboutRightTitle: string;
  aboutRightItems: string[];
  footerTitle: string;
  footerCreditLabel: string;
  footerCreditUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface StackItem {
  id: string;
  name: string;
  icon: string;
}

export interface StackGroup {
  id: string;
  type: string;
  items: StackItem[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  year: number;
  techStack: string[];
  thumbnail: string;
  image?: string;
  galleryImages?: string[];
  liveUrl?: string;
  sourceCode?: string;
  description: string;
  features: string[];
}
