import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import QuestionText from '../../Components/QuestionText/QuestionText';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import getAnswers from './GetQuestions';
import { useEffect, useState } from 'react';

const App = () => {
  const [listedAnswers, setListedAnswers] = useState<string[] | null>(null);

  const navigate = useNavigate();
  const Review = () => {
    navigate('/Review');
  };
  const Home = () => {
    navigate('/');
  };

  //Mock Parameters:
  const getStuff = async () => {
    const answers = await getAnswers();
    setListedAnswers(answers);
  };

  useEffect(() => {
    getStuff();
  }, []);

  const question = 'What is the density of Mars?';
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
        <CentredScreen>
          {listedAnswers && (
            <>
              <div style={{ marginTop: '8%', marginBottom: '8%' }}>
                <QuestionText>{question}</QuestionText>
              </div>
              <div>
                {listedAnswers.map((ans) => (
                  <CustomButton type="large" onClick={() => alert('hi')}>
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
