import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export default (url, data, headers, actionType) => {
  if (REACT_APP_API_URL) {
    return {
      type: actionType, payload: axios.post(`${REACT_APP_API_URL}/${url}`, data, { headers }),
    };
  }
  return {
    type: actionType, payload: axios.post(url, data, { headers }),
  };
};
