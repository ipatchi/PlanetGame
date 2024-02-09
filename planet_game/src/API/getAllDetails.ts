import axios from 'axios';


const postDetailsRequest = async (planetName: string) => {
  const req = await axios.post('http://localhost:8080/planet/search', {
    name: planetName,
  });
  const key = req.data[0].key;
  //   console.log('reached here', planetName);
  //   console.log(key);
  return key;
};

const allDetails = async (planetName: string) => {
  const end = await postDetailsRequest(planetName);
  console.log(end);
  const res = await axios.get('http://localhost:8080/planet/' + end);
  const b: { [index: string]: string } = res.data;
  return b;
};

export default allDetails;