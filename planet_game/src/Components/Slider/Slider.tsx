import { useEffect, useState } from 'react';

import './Slider.css';

const Slider = ({
  defaultValue,
  callOnChange,
}: {
  defaultValue: number;
  callOnChange: (returnVal: number) => void;
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const ele = document.querySelector<HTMLElement>('foo');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
      console.log(value);
    }
  });
  return (
    <>
      <input
        className="slider"
        type="range"
        min="1"
        max="20"
        value={value}
        onChange={({ target: { value: radius } }) => {
          setValue(parseInt(radius));
          callOnChange(parseInt(radius));
        }}
      />
    </>
  );
};

export default Slider;
