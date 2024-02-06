import axios from 'axios';

class myplanet {
  name: string = 'planet';
  density: string = '0';
}

const getData = async () => {
  const resp = await axios.get(
    'http://localhost:8080/planet/53c7df4d7da25e4a0c374262208d133c'
  );
  const mars = new myplanet();
  mars.density = resp.data.density;

  console.log(mars.density);
  return mars.density;
};

const getAnswers = async () => {
  const answers = ['2', '2', '2'];
  answers.push((await getData()).toString());
  return answers;
};

export default getAnswers;
