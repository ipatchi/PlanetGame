import React, { HtmlHTMLAttributes, useState } from 'react';

import './CheckList.css';
import CheckBox from './CheckBox';

interface Props {
  arr: string[];
}

const CheckList: React.FC<Props> = ({ arr }) => {
  const [checkedArr, setCheckedArr] = useState([]);
  const doCheck = (value, i) => {
    setCheckedArr(value)
    console.log({ value });
    console.log({checkedArr})
    console.log({...arr})
  }
  

  console.log({ checkedArr });
  return (
    <>
      <div className="checkList">
        {arr.map((itemText, i) => (
          <div key={i}>
            <CheckBox
              text={itemText}
              checked={false}
              getChecked={() => doCheck(itemText, i)}
            ></CheckBox>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckList;
