import getAttributes from '../../API/Attributes';
import allDetails from '../../API/getAllDetails';
import getPlanetNames from '../../API/getPlanetNames';
import randomInRange from '../../rng';
import Question from './QuestionType';

const getRandomPlanet = async (denyList?: string[]) => {
  //API Call for all planets, then randomise
  let planetList = await getPlanetNames();
  if (denyList) {
    planetList = planetList.filter((pl) => !denyList.includes(pl));
  }
  const randInt = randomInRange(0, planetList.length - 1);
  return planetList[randInt];
};

const getRandomAttribute = async () => {
  //API call for all attributes, then randomise
  const attributes: string[] = await getAttributes();
  const attribute: string = attributes[randomInRange(0, attributes.length - 1)];
  return attribute;
};

const getAttribute = async (attribute: string, planet: string) => {
  const allInfoByAttribute: { [index: string]: string } = await allDetails(
    planet
  );
  return allInfoByAttribute[attribute];
};

const newQuestionDeck = async (num_questions: number) => {
  const questionArray: Question[] = []; //Array to contain each 'question'
  for (let i = 0; i < num_questions; i++) {
    //Repeat for the number of questions needed
    //API Calls

    const num_answers: number = 3;
    const planet: string = await getRandomPlanet();
    const attribute: string = await getRandomAttribute();
    const correctAnswer: string = await getAttribute(attribute, planet);
    const wrongAnswerArray: string[] = [];
    const denyList: string[] = [planet];

    for (let i = 0; i < num_answers; i++) {
      const randomPlanet: string = await getRandomPlanet(denyList);
      const wrongAnswer: string = await getAttribute(attribute, randomPlanet);
      wrongAnswerArray.push(wrongAnswer);
      denyList.push(randomPlanet);
    }

    const question: string = 'What is the ' + attribute + ' of ' + planet + '?'; //Question format
    const allAnswers: string[] = [...wrongAnswerArray];
    const correctAnswerPos: number = randomInRange(
      0,
      wrongAnswerArray.length - 1
    );
    allAnswers.splice(correctAnswerPos, 0, correctAnswer);

    const Q: Question = {
      questionText: question,
      answerText: correctAnswer,
      all_answers: allAnswers,
    };
    questionArray.push(Q);
  }
  return questionArray;
};

export { newQuestionDeck };
