import { useNavigate } from 'react-router-dom';


import '@routing/App.css';

import CentredScreen from '@components/Centre/CentredScreen';
import NavBar from '@components/NavBar/NavBar';
import QuestionText from '@components/QuestionText/QuestionText';
import ReviewDrop from '@components/ReviewDrop/ReviewDrop';
import CustomButton from '@components/CustomButton/CustomButton';
import { getReview } from './ReviewHandler';

const App = () => {
  const navigate = useNavigate();
  const Home = () => {
    navigate('/');
  };

  const reviewArray = getReview();

  return (
    <>
      <div>
        <NavBar title="Planet Game"></NavBar>
        <CentredScreen>
          <br></br>
          <QuestionText>Review</QuestionText>
          <div>
            {reviewArray.map((i, k) => (
              <ReviewDrop
                title={`Question ${k + 1}`}
                question={i.questionText}
                selected={i.selectedAnswer}
                realAnswer={i.answerText}
                correct={i.correct}
              ></ReviewDrop>
            ))}
          </div>
          <div style={{ marginTop: '20%' }}>
            <CustomButton type="large" onClick={Home}>
              Home
            </CustomButton>
          </div>
        </CentredScreen>
      </div>
    </>
  );
};

export default App;
