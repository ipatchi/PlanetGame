import React from 'react';

import './CheckList.css';
import CheckBox from './CheckBox';

interface Props {
  arr: string[];
}

const CheckList: React.FC<Props> = ({ arr }) => {
  const [checkedArr, setCheckedArr] = useState([]);
  const doCheck = (i, value) => setCheckedArr();
  console.log(checkedArr);
  return (
    <>
      <div className="checkList">
        {arr.map((itemText, i) => (
          <div>
            <CheckBox text={itemText} checked={true} getChecked={() => )}></CheckBox>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckList;
