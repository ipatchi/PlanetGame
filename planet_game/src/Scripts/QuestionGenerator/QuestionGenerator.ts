import getAttributes from '@api/Attributes';
import allDetails from '@api/getAllDetails';
import getPlanetNames from '@api/getPlanetNames';

import randomInRange from '@scripts/rng';
import Question from './QuestionType';
import { fromDictionary } from '@scripts/scientificTranslator';

//Calls the API for a list of every planet, returns a random planet which excludes deny list
const getRandomPlanet = async (planetDenyList?: string[]) => {
  //API call for all planets
  let planetList = await getPlanetNames();
  //If the deny list is sent, exclude these
  if (planetDenyList) {
    planetList = planetList.filter((pl) => !planetDenyList.includes(pl));
  }
  const randInt = randomInRange(0, planetList.length - 1);
  //Return random planet
  return planetList[randInt];
};

//Calls the API for a list of every attribute, returns a random attribute which excludes deny list
const getRandomAttribute = async (attributeDenyList?: string[]) => {
  //API call for all attributes
  let attributes: string[] = await getAttributes();
  //If the deny list is sent, exclude these
  if (attributeDenyList) {
    attributes = attributes.filter((at) => !attributeDenyList.includes(at));
  }
  const randInt = randomInRange(0, attributes.length - 1);
  //Return random planet
  return attributes[randInt];
};

//Returns the value of a single attribute of a single planet, 'e.g. Type of Mars => Terrestrial'
const getAttribute = async (attribute: string, planet: string) => {
  const allInfoByAttribute: { [index: string]: string } = await allDetails(
    planet
  );
  return allInfoByAttribute[attribute];
};

//Returns an array of 'Questions' which use the question data type
const newQuestionDeck = async (
  num_questions: number,
  attributeDeny: string[],
  planetDeny: string[]
) => {
  const questionArray: Question[] = []; //Array to contain each 'question'
  for (let i = 0; i < num_questions; i++) {
    //Repeat for the number of questions needed
    const num_answers = 3; //How many wrong answers we would like to see (excluding correct)

    //API calls to create the basis of the question:
    const planet = await getRandomPlanet(planetDeny);
    const attribute = await getRandomAttribute(attributeDeny);
    const correctAnswer = await getAttribute(attribute, planet);

    //Create the array of incorrect answers, given the question properties created above:
    const wrongAnswerArray: string[] = [];
    //Set the denied planets to be the planet the question is about, so 2 correct answers from same source
    const planetDenyList = [planet];

    for (let i = 0; i < num_answers; i++) {
      const randomPlanet = await getRandomPlanet(planetDenyList);
      const wrongAnswer = await getAttribute(attribute, randomPlanet);
      if (
        !wrongAnswerArray.includes(wrongAnswer) &&
        correctAnswer !== wrongAnswer
      ) {
        wrongAnswerArray.push(wrongAnswer);
      }
      planetDenyList.push(randomPlanet);
    }

    //Create the question string itself, using the fromDictionary to make the attribute more readable
    const question =
      'What is the ' + fromDictionary(attribute) + ' of ' + planet + '?';
    
    //Creates the array of all the answers, by using the 
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
