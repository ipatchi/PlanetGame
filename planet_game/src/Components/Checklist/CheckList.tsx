import './CheckList.css';
import CheckBox from './CheckBox';

interface Props {
  arr: string[];
}

const CheckList: React.FC<Props> = ({ arr }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const doCheck = (_a: string, _b: number) => null;
  return (
    <>
      <div className="checkList">
        {arr.map((itemText, i) => (
          <div key={i}>
            <CheckBox
              text={itemText}
              checked={true}
              getChecked={() => doCheck(itemText, i)}
            ></CheckBox>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckList;
