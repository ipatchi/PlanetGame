import React, { useState } from 'react';

import './checkBox.css';

interface Props {
  text: string;
  checked: boolean;
  getChecked: (value: boolean) => void;
}

const CheckBox: React.FC<Props> = ({ text, checked, getChecked }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheck = () => {
    setIsChecked(!isChecked);
    getChecked(isChecked);
  };
  return (
    <>
      <div className="checkBox" onClick={handleCheck}>
        <input type="checkbox" checked={isChecked} />
        {text}
      </div>
    </>
  );
};

export default CheckBox;
