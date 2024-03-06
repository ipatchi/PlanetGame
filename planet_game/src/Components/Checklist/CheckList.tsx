import React, { useState } from 'react';

import './CheckList.css';
import CheckBox from './CheckBox';

interface Props {
  arr: string[];
  defaultValue: boolean;
  onChange: (value: string[]) => void;
}

const CheckList: React.FC<Props> = ({ arr, onChange }) => {
  const [isCheckedArr, setIsCheckedArr] = useState<boolean[]>([
    ...arr.map(() => {
      return false;
    }),
  ]);
  //console.log('Array given:', ...isCheckedArr);

  const getFalseItems = (updatedArray: boolean[]) => {
    const output: string[] = [];
    updatedArray.forEach((value, index) => {
      if (value === false) {
        output.push(arr[index]);
      }
    });
    return output;
  };

  const doCheck = (text: string, value: boolean) => {
    console.log('Item: ' + text + '  Value: ' + value);
    const index = arr.indexOf(text);
    console.log('Index:', index);
    const updatedArray = [...isCheckedArr];
    console.log('At index', updatedArray[index]);
    updatedArray[index] = !updatedArray[index];
    setIsCheckedArr(updatedArray);
    console.log('Updated Array:', updatedArray);
    onChange(getFalseItems(updatedArray));
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
