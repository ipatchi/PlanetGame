import getAttributes from '@api/Attributes';
import allDetails from '@api/getAllDetails';
import getPlanetNames from '@api/getPlanetNames';

import randomInRange from '@scripts/rng';
import Question from './QuestionType';
import { fromDictionary } from '@scripts/scientificTranslator';

const answerAttributeDenyList = ['name', 'description'];

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
  let attributes: string[] = await getAttributes();
  attributes = attributes.filter((at) => !answerAttributeDenyList.includes(at));
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

    const num_answers = 3;
    const planet = await getRandomPlanet();
    const attribute = await getRandomAttribute();
    const correctAnswer = await getAttribute(attribute, planet);
    const wrongAnswerArray = [];
    const denyList = [planet];

    for (let i = 0; i < num_answers; i++) {
      const randomPlanet = await getRandomPlanet(denyList);
      const wrongAnswer = await getAttribute(attribute, randomPlanet);
      wrongAnswerArray.push(wrongAnswer);
      denyList.push(randomPlanet);
    }

    const question =
      'What is the ' + fromDictionary(attribute) + ' of ' + planet + '?'; //Question format
    const allAnswers = [...wrongAnswerArray];
    const correctAnswerPos = randomInRange(0, wrongAnswerArray.length - 1);
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
