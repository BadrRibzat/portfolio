
export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    live?: string;
    backend?: string;
    code: string;
  };
}
