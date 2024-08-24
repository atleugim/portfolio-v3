export interface Project {
  name: string;
  description: string;
  featured: boolean;
  under_construction: boolean;
  type: 'website' | 'app' | 'api';
  link: string;
  technologies: {
    id: string;
    name: string;
  }[];
  repo?: string;
}
