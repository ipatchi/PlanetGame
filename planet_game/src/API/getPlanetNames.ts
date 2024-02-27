import axios from 'axios';
import { ResponseTypes } from './ResponseType';

const getNames = async () => {
  const resp: ResponseTypes = await axios.get('http://localhost:8080/planet');
  const a: string[] = resp.data;
  return a;
};

export default getNames;
