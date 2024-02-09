import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import QuestionText from '../../Components/QuestionText/QuestionText';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { newQuestions } from './QuestionGenerator';
import Question from './QuestionType';

const App = () => {
  const [questionArray, setQuestionArray] = useState<Question[]>([]);
  const [listedAnswers, setListedAnswers] = useState<string[] | null>(null);
  const [question, setQuestion] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
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
    await setQuestionArray(await newQuestions(numberOfQuestions));
    console.log(questionArray);
    newQuestion(0);
    setIsLoading(false);
    console.log('dfghdjfh');
  };

  const newQuestion = async (num: number) => {
    if (currentQuestionNum >= numberOfQuestions) {
      Review();
    } else {
      setQuestion(await questionArray[num].questionText);
      setListedAnswers(await questionArray[num].all_answers);
      setCorrectAnswer(await questionArray[num].answerText);
      setCurrentQuestionNum(num + 1);
    }
  };

  const checkCorrect = (clicked: string) => {
    if (clicked === correctAnswer) {
      alert('correct');
    } else {
      alert('Incorrect');
    }
    newQuestion(currentQuestionNum);
  };

  useEffect(() => {
    loadQuestions(numberOfQuestions);
    setIsLoading(false);
  }, []);

  const header_message = currentQuestionNum + ' / ' + numberOfQuestions;

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
            listedAnswers && (
              <>
                <div style={{ marginTop: '8%', marginBottom: '8%' }}>
                  <QuestionText>{question}</QuestionText>
                </div>
                <div>
                  {listedAnswers.map((ans) => (
                    <CustomButton type="XL" onClick={() => checkCorrect(ans)}>
                      {ans}
                    </CustomButton>
                  ))}
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
