import { Project } from "@/types/project";

export const groupByYear = (projects: Project[]) => {
  const grouped = projects.reduce(
    (acc, project) => {
      acc[project.year] = acc[project.year] || [];
      acc[project.year].push(project);
      return acc;
    },
    {} as Record<string, Project[]>
  );
  return Object.entries(grouped).sort(
    ([a], [b]) => Number(b) - Number(a)
  );
};
