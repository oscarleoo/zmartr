import axios from 'axios';

const { USERS_MICROSERVICE } = process.env;

const register = (email, password) => axios.post(`http://${USERS_MICROSERVICE}/register`, { email, password });

export default register;
