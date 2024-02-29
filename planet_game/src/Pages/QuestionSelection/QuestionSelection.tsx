import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '@components/CustomButton/CustomButton';
import NavBar from '@components/NavBar/NavBar';
import CentredScreen from '@components/Centre/CentredScreen';
import Slider from '@components/Slider/Slider';

const QuestionSelection = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  //Navigation Routing
  const navigate = useNavigate();
  const Question = () => {
    navigate('/Question', {state:{num:numberOfQuestions}});
  };
  const Home = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <NavBar title="Planet Game">
          <CustomButton type="small" onClick={Home}>
            Home
          </CustomButton>
        </NavBar>
        <>
          <CentredScreen>
            <Slider callOnChange={(e)=> setNumberOfQuestions(e)}>Pick the number of questions</Slider>
            <CustomButton type="XL" onClick={Question}>
              Start
            </CustomButton>
          </CentredScreen>
        </>
      </div>
    </>
  );
};

export default QuestionSelection;
