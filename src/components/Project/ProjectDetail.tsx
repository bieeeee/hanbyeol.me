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
      <h1 style={{ fontSize: 20, marginBottom: 10 }}>
        {project.title}
      </h1>
      <p>
        Short description about the project, your role, and
        highlights.
      </p>

      <h3>Tech Stack</h3>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>SASS</li>
      </ul>

      <h3>Preview</h3>
      <img
        src="screenshot.png"
        alt="Project preview"
        style={{ border: "2px solid black" }}
      />

      <h3>Links</h3>
      <a
        href="https://github.com/yourproject"
        style={{
          color: "#0000EE",
          textDecoration: "underline"
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>

      <p>
        <em>Duration: Jan 2023 - Mar 2023</em>
      </p>
    </>
  );
};

export default ProjectDetail;
