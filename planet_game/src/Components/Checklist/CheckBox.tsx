import React, { useState } from 'react';

import './checkBox.css';

interface Props {
  text: React.ReactNode;
  checked: boolean;
  getChecked: (value: boolean) => void;
}

const CheckBox: React.FC<Props> = ({ text, checked, getChecked }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheck = () => {
    const updatedCheck = !isChecked;
    setIsChecked(updatedCheck);
    getChecked(updatedCheck);
  };
  // console.log({text}, {isChecked})
  return (
    <>
      <div className="checkBoxContainer" onClick={handleCheck}>
        <input type="checkbox" className="checkbox" checked={isChecked} />
        <label className="switch"></label>
        <span className="switchLabel">{text}</span>
      </div>
    </>
  );
};

export default CheckBox;
