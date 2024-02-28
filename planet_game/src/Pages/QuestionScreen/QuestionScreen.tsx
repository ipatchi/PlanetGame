import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CentredScreen from '@components/Centre/CentredScreen';
import NavBar from '@components/NavBar/NavBar';
import QuestionText from '@components/QuestionText/QuestionText';
import CustomButton from '@components/CustomButton/CustomButton';
import { newQuestionDeck } from '@components/QuestionGenerator/QuestionGenerator';
import Question from '@components/QuestionGenerator/QuestionType';

import { addReview, clearReview } from '@reviewScreen/ReviewHandler';

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
    clearReview();
    console.log('Question array:' + { ...questionArray });
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
    const QuestionElement = questionArray[currentQuestionNum - 1];
    let correct = false;
    if (clicked === QuestionElement.answerText) {
      correct = true;
    }
    addReview(
      QuestionElement.questionText,
      QuestionElement.answerText,
      clicked,
      correct
    );
    newQuestion(currentQuestionNum);
  };

  useEffect(() => {
    loadQuestions(numberOfQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              </>
            )
          )}
        </CentredScreen>
      </div>
    </>
  );
};

export default App;
