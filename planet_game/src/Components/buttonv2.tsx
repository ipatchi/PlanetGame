import React from "react";

import './Buttons.css';

interface Props {
  children?: React.ReactNode;
  type: string;
  onClick: () => void;
}

const Buttonv2: React.FC<Props> = ({ 
    children,
    type,
    onClick,
  }) => { 
  return (
    <button 
    onClick={onClick}
    className={`button ${type}`}
    >
    {children}
    </button>
  );
}

export default Buttonv2;
