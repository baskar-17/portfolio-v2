export interface Project {
  slug: string;
  title: string;
  company: string;
  logo: string | null;
  industry: string;
  year: string;
  role: string;
  platform: string[];
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  tags: string[];
  nda: boolean;
  order: number;
  featured: boolean;
  categories: string[];
  sections: CaseStudySection[];
}

export interface CaseStudySection {
  id: string;
  title: string;
  type: SectionType;
  published: boolean;
  content: SectionContent;
}

export type SectionType =
  | "text"
  | "image-grid"
  | "full-width-image"
  | "comparison"
  | "diagram"
  | "process"
  | "metrics"
  | "quote"
  | "design-system"
  | "two-column"
  | "sticky-scroll";

export interface SectionContent {
  heading?: string;
  subheading?: string;
  body?: string;
  bullets?: string[];
  images?: ImageAsset[];
  items?: ProcessItem[];
  metrics?: MetricItem[];
  quote?: { text: string; author: string; role: string };
  columns?: { left: string; right: string };
}

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  frame?: "browser" | "phone" | "tablet" | "none";
}

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description?: string;
}
