import axios from 'axios';

import { ResponseTypes } from './ResponseType';

const getAttributes = async () => {
  const res: ResponseTypes = await axios('http://localhost:8080/headers');
  return res.data;
};

export default getAttributes;
