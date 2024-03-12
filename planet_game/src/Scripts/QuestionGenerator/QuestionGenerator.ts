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

//Returns the number of availiable planets given a deny list
const getNumberOfPlanets = async (planetDenyList?: string[]) => {
  let planetList = await getPlanetNames();
  if (planetDenyList) {
    planetList = planetList.filter((pl) => !planetDenyList.includes(pl));
  }
  return planetList.length;
};

//Returns the number of availiable attributes given a deny list
const getNumberOfAttributes = async (attributeDenyList?: string[]) => {
  let attributeList = await getAttributes();
  if (attributeDenyList) {
    attributeList = attributeList.filter(
      (at) => !attributeDenyList.includes(at)
    );
  }
  return attributeList.length;
};

//Returns a list of all planets in a randomised order
const getPlanetsInRandomOrder = async () => {
  const planetList = await getPlanetNames();
  return planetList
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
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

  const num_answers = 3; //The MAXIMUM amount of incorrect answers that COULD be displayed

  const numberOfPlanets = await getNumberOfPlanets(planetDeny);
  const numberOfAttributes = await getNumberOfAttributes(attributeDeny);
  const planetChoices: string[] = [];
  const attributeChoices: string[] = [];

  //For each question, choose a different planet and attribute (if able, else choose randomly)
  for (let j = 0; j < num_questions; j++) {
    let planet = '';
    let attribute = '';
    if (j < numberOfPlanets) {
      planet = await getRandomPlanet([...planetChoices, ...planetDeny]);
    } else {
      planet = await getRandomPlanet(planetDeny);
    }
    if (j < numberOfAttributes) {
      attribute = await getRandomAttribute([
        ...attributeChoices,
        ...attributeDeny,
      ]);
    } else {
      attribute = await getRandomAttribute(attributeDeny);
    }
    planetChoices.push(planet);
    attributeChoices.push(attribute);
  }

  //For every planet that has been created, generate the rest of the question
  for (let index = 0; index < planetChoices.length; index++) {
    const planetName = planetChoices[index];
    const attribute = attributeChoices[index];

    const correctAnswer = await getAttribute(attribute, planetName); //Get the correct answer
    const randomPlanets = await getPlanetsInRandomOrder(); //Get every possible planet in a random order

    const wrongAnswerArray: string[] = [];

    //For each of the random planets, check if they are needed as an answer, until exhausted
    for (let i = 0; i < randomPlanets.length; i++) {
      const randomPlanet = randomPlanets[i];
      const potentialAnswer = await getAttribute(attribute, randomPlanet);
      if (
        //If its not the correct one, listed, and theres not too many, add it on
        correctAnswer != potentialAnswer &&
        !wrongAnswerArray.includes(potentialAnswer) &&
        wrongAnswerArray.length < num_answers
      ) {
        wrongAnswerArray.push(potentialAnswer);
      }
    }

    //Formulate the question which is output to the user
    const question =
      'What is the ' + fromDictionary(attribute) + ' of ' + planetName + '?';

    //Combine all answers into one array with the correct one in a random position
    const allAnswers = [...wrongAnswerArray];
    const correctAnswerPos = randomInRange(0, wrongAnswerArray.length);
    allAnswers.splice(correctAnswerPos, 0, correctAnswer);

    //Turn all of the factors into a 'Question' type
    const Q: Question = {
      questionText: question,
      answerText: correctAnswer,
      all_answers: allAnswers,
    };
    questionArray.push(Q); //Add the question type to the question array
  }
  return questionArray; //Return the question array to where it is called from
};

export { newQuestionDeck };
