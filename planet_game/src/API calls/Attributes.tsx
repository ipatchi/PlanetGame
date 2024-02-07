import axios from 'axios';

const getAttributes = async () => {
  const res = await axios('http://localhost:8080/headers');
  return res.data;
};

export default getAttributes;