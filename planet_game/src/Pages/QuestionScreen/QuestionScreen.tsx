import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CentredScreen from '@components/Centre/CentredScreen';
import NavBar from '@components/NavBar/NavBar';
import QuestionText from '@components/QuestionText/QuestionText';
import CustomButton from '@components/CustomButton/CustomButton';
import { newQuestionDeck } from '@components/QuestionGenerator/QuestionGenerator';
import Question from '@components/QuestionGenerator/QuestionType';

import ReviewText from '../ReviewScreen/ReviewType';

const QuestionScreen = () => {
  const [questionArray, setQuestionArray] = useState<Question[]>([]);
  const [currentQuestionNum, setCurrentQuestionNum] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { state } = useLocation();
  const { num, attributeDenyList } = state;
  const numberOfQuestions = num;
  const attributeDeny = attributeDenyList;

  //const reviewArr: ReviewText[] [];
  const [reviewArr, setReviewArr] = useState<ReviewText[]>([]);

  //Navigation Routing

  const navigate = useNavigate();
  const Review = (reviewState: ReviewText[]) => {
    navigate('/Review', { state: { reviewState } });
  };
  const Home = () => {
    navigate('/');
  };

  //Get Question
  const loadQuestions = async (numberOfQuestions: number) => {
    const arr = await newQuestionDeck(numberOfQuestions, attributeDeny);
    setQuestionArray(arr);
    setCurrentQuestionNum(1);
    setReviewArr([]);
    setIsLoading(false);
  };

  const checkCorrect = (clicked: string) => {
    const questionElement = questionArray[currentQuestionNum - 1];

    const updatedReviewArr = [
      ...reviewArr,
      {
        questionText: questionElement.questionText,
        answerText: questionElement.answerText,
        correct: clicked === questionElement.answerText,
        selectedAnswer: clicked,
      },
    ];
    setReviewArr(updatedReviewArr);

    if (currentQuestionNum >= numberOfQuestions) {
      Review(updatedReviewArr);
    } else {
      setCurrentQuestionNum(currentQuestionNum + 1);
    }
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

export default QuestionScreen;
