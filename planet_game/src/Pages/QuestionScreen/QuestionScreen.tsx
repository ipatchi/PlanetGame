import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import QuestionText from '../../Components/QuestionText/QuestionText';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import getAttributes from '../../API calls/Attributes';
import { useEffect, useState } from 'react';

const App = () => {
  const [listedAttributes, setListedAttributes] = useState<string | null>(null);

  const navigate = useNavigate();
  const Review = () => {
    navigate('/Review');
  };
  const Home = () => {
    navigate('/');
  };

  const getAtt = async () => {
    const attributes: string[] = await getAttributes();
    const attribute: string = attributes[4];
    setListedAttributes(attribute);
  };

  useEffect(() => {
    getAtt();
  }, []);

  //Mock Parameters:
  const question = `What is the ${listedAttributes} of Mars?`;
  const answers = [1.234, 10.56, 300.72, 7];
  const question_num = 1;
  const num_questions = 5;
  const header_message = question_num + ' / ' + num_questions;

  const listedAnswers = answers.map((ans) => (
    <CustomButton type="XL" onClick={() => alert('ANSWER 1')}>
      {ans}
    </CustomButton>
  ));

  return (
    <>
      <div>
        <NavBar title="Planet Game" message={header_message}>
          <CustomButton type="small" onClick={Home}>
            Home
          </CustomButton>
        </NavBar>
        <CentredScreen>
          <div style={{ marginTop: '8%', marginBottom: '8%' }}>
            <QuestionText>{question}</QuestionText>
          </div>
          <div>{listedAnswers}</div>
          <div style={{ marginTop: '20%' }}>
            <CustomButton type="large" onClick={Review}>
              Continue
            </CustomButton>
          </div>
        </CentredScreen>
      </div>
    </>
  );
};

export default App;
