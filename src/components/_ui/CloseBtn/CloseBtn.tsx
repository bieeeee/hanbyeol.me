import React from "react";
import "./CloseBtn.scss";

interface CloseBtnProps {
  onClick: () => void;
  style?: React.CSSProperties;
}

const CloseBtn: React.FC<CloseBtnProps> = ({
  onClick,
  style
}) => {
  return (
    <button onClick={onClick} className="btn close-btn">
      <img
        src="src/assets/icons/close.png"
        alt="close"
        style={{ ...style }}
      />
    </button>
  );
};

export default CloseBtn;
