import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '@components/CustomButton/CustomButton';
import NavBar from '@components/NavBar/NavBar';
import CentredScreen from '@components/Centre/CentredScreen';
import Slider from '@components/Slider/Slider';
import QuestionText from '@components/QuestionText/QuestionText';
import CheckList from '@components/Checklist/CheckList';
import getAttributes from '@api/Attributes';
import getNames from '@api/getPlanetNames';

import './QuestionSelection.css';

const QuestionSelection = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [listedAttributes, setListedAttributes] = useState<string[]>([]);
  const [listedNames, setListedNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [attributeDeny, setAttributeDeny] = useState<string[]>([]);
  const [nameDeny, setNameDeny] = useState<string[]>([]);
  //Navigation Routing
  const navigate = useNavigate();
  const Question = () => {
    navigate('/Question', {
      state: {
        num: numberOfQuestions,
        attributeDenyList: attributeDeny,
        planetDenyList: nameDeny,
      },
    });
  };
  const Home = () => {
    navigate('/');
  };

  const getAllAttributes = async () => {
    const attributes: string[] = await getAttributes();
    setListedAttributes(attributes);
    const names: string[] = await getNames();
    setListedNames(names);
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
              <Slider
                defaultValue={numberOfQuestions}
                callOnChange={(e) => setNumberOfQuestions(e)}
              ></Slider>
            </div>
            <div>
              {isLoading ? (
                <p>Fetching Values...</p>
              ) : (
                <div>
                  <table className="optionTable">
                    <th>
                      <h1>Choose Attributes:</h1>
                      <CheckList
                        arr={[...listedAttributes]}
                        defaultValue={true}
                        onChange={(r) => {
                          const updatedDenyList = r;
                          console.log(updatedDenyList);
                          setAttributeDeny(updatedDenyList);
                        }}
                      ></CheckList>
                    </th>
                    <th>
                      <h1>Choose Planets:</h1>
                      <CheckList
                        arr={[...listedNames]}
                        defaultValue={true}
                        onChange={(r) => {
                          setNameDeny(r);
                        }}
                      ></CheckList>
                    </th>
                  </table>
                </div>
              )}
            </div>
            <div>
              <CustomButton type="XL" onClick={() => Question()}>
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
