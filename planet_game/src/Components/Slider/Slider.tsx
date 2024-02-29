import { ReactNode, useEffect, useState } from 'react';

import './Slider.css';

const Slider = ({
  children,
  callOnChange,
}: {
  children?: ReactNode;
  callOnChange: (returnVal: number) => void;
}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    const ele = document.querySelector<HTMLElement>('foo');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
      console.log(value);
    }
  });
  return (
    <>
      <div className='numberText'>{children}</div>
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
      <div className='numberText'>{value}</div>
    </>
  );
};

export default Slider;
