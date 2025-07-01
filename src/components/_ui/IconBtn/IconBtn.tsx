import React from "react";
import "./IconBtn.scss";

interface IconBtnProps {
  title: string;
  imgSrc: string;
  onClick: () => void;
}

const IconBtn: React.FC<IconBtnProps> = ({
  title,
  imgSrc,
  onClick
}) => {
  return (
    <button onClick={onClick} className="icon-btn">
      <img rel="preload" src={imgSrc} alt={title} />
      <p>{title}</p>
    </button>
  );
};

export default IconBtn;
