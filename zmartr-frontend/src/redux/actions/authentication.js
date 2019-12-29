import axios from 'axios';

export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });

export const LOGIN = 'LOGIN';
export const login = (email, password) => {
  const url = `/api/login?email=${email}&password=${password}`;
  return { type: LOGIN, payload: axios.get(url) };
};

export const REGISTER = 'REGISTER';
export const register = (email, password) => {
  const url = '/api/register';
  const data = { email, password };
  return { type: REGISTER, payload: axios.post(url, data) };
};
