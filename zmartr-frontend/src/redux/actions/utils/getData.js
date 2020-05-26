import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export default (url, headers, actionType) => {
  if (REACT_APP_API_URL) {
    return {
      type: actionType, payload: axios.get(`${REACT_APP_API_URL}/${url}`, { headers }),
    };
  }
  return {
    type: actionType, payload: axios.get(url, { headers }),
  };
};
