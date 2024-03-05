import React, { useState } from 'react';

import './CheckList.css';
import CheckBox from './CheckBox';

interface Props {
  arr: string[];
  defaultValue: boolean;
}

const CheckList: React.FC<Props> = ({ arr }) => {
  const [isCheckedArr, setIsCheckedArr] = useState<boolean[]>([
    ...arr.map(() => {
      return false;
    }),
  ]);
  //console.log('Array given:', ...isCheckedArr);

  const getFalseItems = () => {
    const output: string[] = [];
    isCheckedArr.forEach((value, index) => {
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
        <p>False Items: {...getFalseItems()}</p>
      </div>
    </>
  );
};

export default CheckList;
