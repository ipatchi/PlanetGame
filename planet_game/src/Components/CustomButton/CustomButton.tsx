import React from "react";

import "./CustomButton.css";

interface Props {
  children?: React.ReactNode;
  type: string;
  onClick: () => void;
}

const CustomButton: React.FC<Props> = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${type}`}>
      {children}
    </button>
  );
};

export default CustomButton;
