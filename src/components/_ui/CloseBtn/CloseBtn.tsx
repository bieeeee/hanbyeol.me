import React from "react";

interface CloseBtnProps {
  onClick: () => void;
  style?: React.CSSProperties;
}

const CloseBtn: React.FC<CloseBtnProps> = ({
  onClick,
  style
}) => {
  return (
    <button onClick={onClick} className="close-btn">
      <img
        src="assets/icons/close.png"
        alt="close"
        style={{ ...style }}
      />
    </button>
  );
};

export default CloseBtn;
