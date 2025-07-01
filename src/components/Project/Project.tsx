import React, { useState } from "react";
import projectsData from "@/data/projects.json";
import { IconBtn, Modal } from "@components";
import "./Project.scss";
import { useTranslation } from "react-i18next";

const SubFolder = ({ year, projects }) => {
  const [isActive, setIsActive] = useState(false);
  const sectionId = `projects-${year}`;

  return (
    <div className="project-subgroup" data-open={isActive}>
      <IconBtn
        title={year}
        imgSrc={`/src/assets/icons/${isActive ? "folder" : "folder-open"}.png`}
        onClick={() => setIsActive(!isActive)}
        isHorizontal
        size="sm"
        customClass="folder-btn"
        aria-expanded={isActive}
        aria-controls={sectionId}
      />
      {isActive && (
        <ul id={sectionId}>
          {projects.map((project) => (
            <li key={project.title}>
              <IconBtn
                title={project.title}
                imgSrc="/src/assets/icons/rich-text.png"
                onClick={() => {}}
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

const Project: React.FC = () => {
  const { t } = useTranslation();

  const groupByYear = (projects) => {
    const grouped = projects.reduce((acc, project) => {
      const year = project.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
      return acc;
    }, {});

    return Object.entries(grouped).sort(
      ([a], [b]) => Number(b) - Number(a)
    );
  };

  return (
    <Modal title={t("modal.projects")}>
      <div className="title-box">
        <span>All Folders</span>
        <span>Contents of </span>
      </div>
      <div className="projects-container">
        <div className="project-explorer" role="tree">
          {Object.entries(projectsData).map(
            ([folderKey, projects]) => (
              <div
                key={folderKey}
                className="project-group"
              >
                <IconBtn
                  title={folderKey}
                  imgSrc="/src/assets/icons/hard-drive.png"
                  onClick={() => {}}
                  isHorizontal
                  role="treeitem"
                  size="sm"
                />
                {groupByYear(projects).map(
                  ([year, projectsByYear]) => (
                    <SubFolder
                      key={year}
                      year={year}
                      projects={projectsByYear}
                    />
                  )
                )}
              </div>
            )
          )}
        </div>
        <div
          className="project-detail-panel"
          aria-live="polite"
        />
      </div>
    </Modal>
  );
};

export default Project;
