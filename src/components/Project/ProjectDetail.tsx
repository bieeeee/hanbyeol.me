import React from "react";
import { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project
}) => {
  return (
    <>
      <h1 className="title">{project.title}</h1>
      <h3 className="subtitle">[Description]</h3>
      <p>{project.desc}</p>

      <h3 className="subtitle">[Tech Stack]</h3>
      <ul>
        {project.stacks.map((stack) => (
          <li key={stack} className="stack">
            {stack}
          </li>
        ))}
      </ul>
      {project.gh && (
        <>
          <h3 className="subtitle">[Links]</h3>
          <a
            href={project.gh}
            style={{
              color: "#0000EE",
              textDecoration: "underline"
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </>
      )}
    </>
  );
};

export default ProjectDetail;
