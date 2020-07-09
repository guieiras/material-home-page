export interface PortfolioTag {
  name: string;
  color: string;
}

export default interface Portfolio {
  name: string;
  projectUrl?: string;
  repositoryUrl?: string;
  description: string;
  order: number;
  tags: PortfolioTag[];
}
