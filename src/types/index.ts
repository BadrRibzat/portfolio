export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    live?: string;
    backend?: string;
    code: string;
  };
  image: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
}
