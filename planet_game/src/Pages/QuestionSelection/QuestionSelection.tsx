import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '@components/CustomButton/CustomButton';
import NavBar from '@components/NavBar/NavBar';
import CentredScreen from '@components/Centre/CentredScreen';
import Slider from '@components/Slider/Slider';
import QuestionText from '@components/QuestionText/QuestionText';
import CheckList from '@components/Checklist/CheckList';
import getAttributes from '@api/Attributes';
//import { fromDictionary } from '@scripts/scientificTranslator';

const QuestionSelection = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [listedAttributes, setListedAttributes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  //Navigation Routing
  const navigate = useNavigate();
  const Question = () => {
    navigate('/Question', { state: { num: numberOfQuestions } });
  };
  const Home = () => {
    navigate('/');
  };

  const getAllAttributes = async () => {
    const attributes: string[] = await getAttributes();
    setListedAttributes(attributes);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllAttributes();
  }, []);

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
            <div>
              <QuestionText>
                Number of Questions: &nbsp; {numberOfQuestions}
              </QuestionText>
              <Slider callOnChange={(e) => setNumberOfQuestions(e)}></Slider>
            </div>
            <div>
              {isLoading ? (
                <p>Fetching Values...</p>
              ) : (
                <div>
                  <QuestionText>Choose Attributes:</QuestionText>
                  <CheckList
                    arr={[...listedAttributes]}
                    defaultValue={true}
                  ></CheckList>
                </div>
              )}
            </div>
            <br></br>
            <div>
              <QuestionText>Choose People:</QuestionText>

              <CheckList
                arr={['BOB', 'STEVE', 'STEW', 'BART', 'DISCOTRON']}
                defaultValue={true}
              ></CheckList>
            </div>
            <div>
              <CustomButton type="XL" onClick={Question}>
                Start
              </CustomButton>
            </div>
          </CentredScreen>
        </>
      </div>
    </>
  );
};

export default QuestionSelection;
