import React from "react";
import "./IconBtn.scss";

interface IconBtnProps {
  title: string;
  imgSrc: string;
  isHorizontal?: boolean;
  role?: string;
  size?: string;
  customClass?: string;
  onClick: () => void;
}

const IconBtn: React.FC<IconBtnProps> = ({
  title,
  imgSrc,
  isHorizontal,
  role,
  size,
  customClass,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`icon-btn ${isHorizontal ? "horizontal" : ""} ${size} ${customClass}`}
      title={title}
      role={role}
    >
      <img src={imgSrc} alt={title} />
      <p>{title}</p>
    </button>
  );
};

export default IconBtn;
