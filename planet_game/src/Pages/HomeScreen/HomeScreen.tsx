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
     navigate('/Question', { state: { num:5 } });
   };
  const QuestionSelection = () => {
    navigate('/QuestionSelection')
  }
  return (
    <>
      <div>
        <NavBar title="Planet Game"></NavBar>
        <CentredScreen>
          {/* use padding for breaks*/}
          <div className="gap"></div>
          <CustomButton type="XL" onClick={Start}>
            Start
          </CustomButton>
          <div></div>
          <CustomButton type="XL" onClick={QuestionSelection}>
            Question selection
          </CustomButton>
          <div></div>
          <CustomButton type="XL" onClick={Learn}>
            Learn
          </CustomButton>
        </CentredScreen>
      </div>
    </>
  );
};

export default QuestionScreen;
