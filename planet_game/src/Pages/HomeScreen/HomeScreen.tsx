import { useNavigate } from 'react-router-dom';

import CentredScreen from '@components/Centre/CentredScreen';
import NavBar from '@components/NavBar/NavBar';
import CustomButton from '@components/CustomButton/CustomButton';

const QuestionScreen = () => {
  const navigate = useNavigate();
  const Learn = () => {
    navigate('/Learn');
  };
  const Start = () => {
    navigate('/Question', { state: { num: 5 } });
  };
  const QuestionSelection = () => {
    navigate('/QuestionSelection');
  };
  return (
    <>
      <div>
        <NavBar title="Planet Game"></NavBar>
        <CentredScreen>
          {/* use padding for breaks*/}
          <div style={{ marginTop: '8%', marginBottom: '8%' }}>
            <CustomButton type="XL" onClick={Start}>
              Planet Quiz
            </CustomButton>
            <div></div>
            <CustomButton type="XL" onClick={QuestionSelection}>
              Custom Quiz
            </CustomButton>
            <div></div>
            <CustomButton type="XL" onClick={Learn}>
              Planet Learn
            </CustomButton>
          </div>
        </CentredScreen>
      </div>
    </>
  );
};

export default QuestionScreen;
