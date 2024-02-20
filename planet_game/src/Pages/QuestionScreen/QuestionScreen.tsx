import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import QuestionText from '../../Components/QuestionText/QuestionText';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { newQuestionDeck } from './QuestionGenerator';
import Question from './QuestionType';

const App = () => {
  const [questionArray, setQuestionArray] = useState<Question[]>([]);
  const [currentQuestionNum, setCurrentQuestionNum] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const numberOfQuestions = 3;

  //Navigation Routing

  const navigate = useNavigate();
  const Review = () => {
    navigate('/Review');
  };
  const Home = () => {
    navigate('/');
  };

  //Get Question
  const loadQuestions = async (numberOfQuestions: number) => {
    const arr = await newQuestionDeck(numberOfQuestions);
    setQuestionArray(arr);
    newQuestion(0);
    setIsLoading(false);
  };

  const newQuestion = async (num: number) => {
    if (currentQuestionNum >= numberOfQuestions) {
      Review();
    } else {
      setCurrentQuestionNum(num + 1);
    }
  };

  const checkCorrect = (clicked: string) => {
    if (clicked === questionArray[currentQuestionNum - 1].answerText) {
      alert('correct');
    } else {
      alert('Incorrect');
    }
    newQuestion(currentQuestionNum);
  };

  useEffect(() => {
    loadQuestions(numberOfQuestions);
  }, []);

  const header_message = currentQuestionNum + ' / ' + numberOfQuestions;

  console.log({ questionArray });

  return (
    <>
      <div>
        <NavBar title="Planet Game" message={header_message}>
          <CustomButton type="small" onClick={Home}>
            Home
          </CustomButton>
        </NavBar>
        <p></p>
        <CentredScreen>
          {isLoading ? (
            <QuestionText>Loading Question...</QuestionText>
          ) : (
            questionArray && (
              <>
                <div style={{ marginTop: '8%', marginBottom: '8%' }}>
                  <QuestionText>
                    {questionArray[currentQuestionNum - 1].questionText}
                  </QuestionText>
                </div>
                <div>
                  {questionArray[currentQuestionNum - 1].all_answers.map(
                    (ans) => (
                      <CustomButton type="XL" onClick={() => checkCorrect(ans)}>
                        {ans}
                      </CustomButton>
                    )
                  )}
                </div>
                <div style={{ marginTop: '20%' }}>
                  <CustomButton type="large" onClick={Review}>
                    Continue
                  </CustomButton>
                </div>
              </>
            )
          )}
        </CentredScreen>
      </div>
    </>
  );
};

export default App;
