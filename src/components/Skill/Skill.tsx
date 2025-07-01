import React from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "@components";
import skills from "@/data/skills.json";
import "./Skill.scss";

const Skill: React.FC = ({}) => {
  const { t } = useTranslation();

  return (
    <Modal title={t("modal.skills")}>
      <div className="skills-container">
        {skills.map(({ name, icon, style }) => (
          <div
            className="skill-logo"
            style={style}
            key={name}
          >
            <img src={icon} alt={name.toLowerCase()} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default Skill;
