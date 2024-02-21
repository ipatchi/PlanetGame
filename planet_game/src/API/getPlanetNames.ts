import axios from 'axios';

const getNames = async () => {
  const resp = await axios.get('http://localhost:8080/planet');
  const a: string[] = resp.data;
  console.log({resp});
  return a;
};

export default getNames;
