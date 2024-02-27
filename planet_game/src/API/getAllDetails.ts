import axios from 'axios';

interface SearchType {
  data: { key: string }[];
}
interface AllDetailsType {
  data: { [index: string]: string };
}

const postDetailsRequest = async (planetName: string) => {
  const req: SearchType = await axios.post(
    'http://localhost:8080/planet/search',
    {
      name: planetName,
    }
  );
  const key: string = req.data[0].key;
  return key;
};

const allDetails = async (planetName: string) => {
  const end: string = await postDetailsRequest(planetName);
  const res: AllDetailsType = await axios.get(
    'http://localhost:8080/planet/' + end
  );
  const b: { [index: string]: string } = res.data;
  return b;
};

export default allDetails;
