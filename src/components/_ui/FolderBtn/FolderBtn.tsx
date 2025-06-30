import React from "react";
import "./FolderBtn.css";

interface FolderBtnProps {
  title: string;
  onClick: () => void;
}

const FolderBtn: React.FC<FolderBtnProps> = ({
  title,
  onClick
}) => {
  return (
    <button onClick={onClick} className="btn-modal">
      <img
        rel="preload"
        src="assets/icons/folder.png"
        alt="folder"
        style={{ width: "48px", height: "48px" }}
      />
      <p>{title}</p>
    </button>
  );
};

export default FolderBtn;
