import React, { useState } from 'react';

import './CheckList.css';
import CheckBox from './CheckBox';

interface Props {
  arr: string[];
}

const CheckList: React.FC<Props> = ({ arr }) => {
  const [uncheckedArr, setUncheckedArray] = useState([...arr]);

  const doCheck = (text: string, value: boolean) => {
    let updatedArray: string[] = [...uncheckedArr];

    console.log('Updated array: ', ...updatedArray);

    if (value === true) {
      const index = updatedArray.indexOf(text);
      console.log({ index }, { text });
      if (index > -1) {
        updatedArray = [...updatedArray].splice(index, 0);
        console.log('removed here', text);
        console.log('ahhhhh', ...updatedArray);
      } else {
        console.log("shouldn't be here...")
      }
    } else {
      updatedArray = [...uncheckedArr, text];
      console.log('added here', text);
    }

    setUncheckedArray(updatedArray);

    console.log('The array: ', ...updatedArray);
    console.log({ value });
  };

  return (
    <>
      <div className="checkList">
        {arr.map((itemText, i) => (
          <div key={i}>
            <CheckBox
              text={itemText}
              checked={false}
              getChecked={(value) => doCheck(itemText, value)}
            ></CheckBox>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckList;
