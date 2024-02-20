import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import QuestionText from '../../Components/QuestionText/QuestionText';
import ReviewDrop from '../../Components/ReviewDrop/ReviewDrop';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
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
        <NavBar title="Planet Game">
          <CustomButton type="small" onClick={Home}>
            Home
          </CustomButton>
        </NavBar>
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
        </CentredScreen>
      </div>
    </>
  );
};

export default App;
