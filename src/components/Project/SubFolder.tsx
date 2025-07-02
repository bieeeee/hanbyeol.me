import React, { useState } from "react";
import { IconBtn } from "@components";
import { Project } from "@/types/project";
import "./Project.scss";

interface SubFolderProps {
  year: string;
  projects: Project[];
  setActiveProject: React.Dispatch<
    React.SetStateAction<Project | null>
  >;
}

const SubFolder: React.FC<SubFolderProps> = ({
  year,
  projects,
  setActiveProject
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionId = `projects-${year}`;

  return (
    <div className="project-subgroup" data-open={isOpen}>
      <IconBtn
        title={year}
        imgSrc={`/src/assets/icons/${isOpen ? "folder" : "folder-open"}.png`}
        onClick={() => setIsOpen((prev) => !prev)}
        isHorizontal
        size="sm"
        customClass="folder-btn"
        aria-expanded={isOpen}
        aria-controls={sectionId}
      />
      {isOpen && (
        <ul id={sectionId}>
          {projects.map((project) => (
            <li key={project.title}>
              <IconBtn
                title={project.title}
                imgSrc="/src/assets/icons/rich-text.png"
                onClick={() => setActiveProject(project)}
                isHorizontal
                size="sm"
                customClass="file-btn"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubFolder;
