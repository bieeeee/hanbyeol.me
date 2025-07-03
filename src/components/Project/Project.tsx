import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  IconBtn,
  Modal,
  ProjectDetail,
  SubFolder
} from "@components";
import { groupByYear } from "@/utils/projectUtils";
import { Project as ProjectType } from "@/types/project";
import projectsData from "@/data/projects.json";
import "./Project.scss";

const Project: React.FC = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] =
    useState<ProjectType | null>(null);

  return (
    <Modal
      title={t("modal.projects")}
      onClose={() => setActiveProject(null)}
    >
      <div className="title-box">
        <span>{t("projects.all")}</span>
        <span>
          {t("projects.contentOf", {
            name: activeProject?.title
          })}
        </span>
      </div>

      <div className="projects-container">
        <nav className="project-explorer" role="tree">
          {Object.entries(projectsData).map(
            ([folderKey, projects]) => (
              <div
                key={folderKey}
                className="project-group"
              >
                <IconBtn
                  title={t(folderKey)}
                  imgSrc="src/assets/icons/hard-drive.png"
                  onClick={() => {}}
                  isHorizontal
                  role="treeitem"
                  size="sm"
                />
                {groupByYear(projects).map(
                  ([year, projectsInYear]) => (
                    <SubFolder
                      key={year}
                      year={year}
                      projects={projectsInYear}
                      setActiveProject={setActiveProject}
                    />
                  )
                )}
              </div>
            )
          )}
        </nav>

        <section
          className="project-detail-panel"
          aria-live="polite"
        >
          {activeProject && (
            <ProjectDetail project={activeProject} />
          )}
        </section>
      </div>
    </Modal>
  );
};

export default Project;
