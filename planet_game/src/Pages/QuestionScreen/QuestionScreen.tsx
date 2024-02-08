import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import QuestionText from '../../Components/QuestionText/QuestionText';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { newQuestions } from './QuestionGenerator';

const App = () => {
  const [listedAnswers, setListedAnswers] = useState<string[] | null>(null);
  const [question, setQuestion] = useState<string | null>(null);
  const [correctOption, setCorrectOption] = useState<number | null>(null);

  //Navigation Routing

  const navigate = useNavigate();
  const Review = () => {
    navigate('/Review');
  };
  const Home = () => {
    navigate('/');
  };

  //Get Question
  const doQuestions = async () => {
    const questionArray = await newQuestions(1);
    setQuestion(questionArray[0].questionText);
    setListedAnswers(questionArray[0].all_answers);
    setCorrectOption(0); //Needs updating with correct option that lines up with the answers
  };

  const submitAns = (selected: number) => {
    if (selected === correctOption) {
      console.log('Correct!');
    }
  };

  useEffect(() => {
    doQuestions();
  }, []);

  const question_num = 1;
  const num_questions = 5;
  const header_message = question_num + ' / ' + num_questions;

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
          {listedAnswers && (
            <>
              <div style={{ marginTop: '8%', marginBottom: '8%' }}>
                <QuestionText>{question}</QuestionText>
              </div>
              <div>
                {listedAnswers.map((ans, i) => (
                  <CustomButton type="XL" onClick={() => submitAns(i)}>
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
          )}
        </CentredScreen>
      </div>
    </>
  );
};

export default App;
