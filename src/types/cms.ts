// CMS Content Types
export interface Project {
  id: string;
  title: string;
  slug: string;
  heroImage: string;
  clientName: string;
  industry: string;
  year: number;
  services: Service[];
  shortBlurb: string;
  problemStatement: string;
  storyboard: StoryboardFrame[];
  solution: string;
  gallery: string[];
  outcomes: Outcome[];
  testimonial?: Testimonial;
  pdfCaseStudy?: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
}

export interface StoryboardFrame {
  id: string;
  image: string;
  caption: string;
  order: number;
}

export interface Outcome {
  metric: string;
  value: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  deliverables: string[];
  industries: string[];
  sampleProjects: string[];
  pricingAnchor: string;
}

export interface Package {
  id: string;
  name: string;
  priceMonthly: number;
  priceNote: string;
  deliverables: string[];
  onboardingSteps: string[];
  whoItSuits: string;
  faq: FAQ[];
  cta: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  bioBrief: string;
  responsibilityTags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: TeamMember;
  heroImage: string;
  summary: string;
  body: string;
  tags: string[];
  relatedProjects: string[];
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  responsibilities: string[];
  skillsRequired: string[];
  portfolioRequirements: string[];
  applyForm: string;
}

export interface ContactForm {
  name: string;
  company: string;
  role: string;
  email: string;
  phone?: string;
  budget: string;
  services: string[];
  timeline: string;
  message: string;
  files?: File[];
}