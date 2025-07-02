export interface Project {
  id: string;
  title: string;
  desc: string[] | string;
  stacks: string[];
  year: string;
  client?: string;
}
