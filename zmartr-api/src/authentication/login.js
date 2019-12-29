import axios from 'axios';

const { USERS_MICROSERVICE } = process.env;

const login = (email, password) => {
  const data = { email, password };
  return axios.post(`http://${USERS_MICROSERVICE}/login`, data);
};

export default login;
