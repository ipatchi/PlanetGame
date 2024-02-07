import getAttributes from '../../API/Attributes';
import getPlanetNames from '../../API/getPlanetNames';
import randomInRange from '../../rng';

const getRandomPlanet = async () => {
  //API Call for all planets, then randomise
  const planetList = await getPlanetNames();
  const randInt = randomInRange(0, planetList.length - 1);
  console.log(planetList, randInt);
  return planetList[randInt];
};

const getRandomAttribute = async () => {
  //API call for all attributes, then randomise
  const attributes: string[] = await getAttributes();
  const attribute: string = attributes[randomInRange(0, attributes.length - 1)];
  return attribute;
};

type Question = {
  questionText: string;
  answerText: string;
  all_answers: string[];
};

const newQuestions = async (num_questions: number) => {
  const questionArray: Question[] = []; //Array to contain each 'question'
  for (let i = 0; i < num_questions; i++) {
    //Repeat for the number of questions needed
    //API Calls
    const planet = await getRandomPlanet();
    const attribuite = await getRandomAttribute();

    const question = 'What is the ' + attribuite + ' of ' + planet; //Question format
    const Q: Question = {
      questionText: question,
      answerText: 'answer',
      all_answers: ['wrong', 'wrong', 'wrong'],
    };

    questionArray.push(Q);
  }
  return questionArray;
};

export { newQuestions };
