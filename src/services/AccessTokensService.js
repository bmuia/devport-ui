import axios from "axios";


const BASE_URL = 'http://localhost:8000/';
const ACCESS_TOKEN_KEY = 'access_token';


const getTokenHeader = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  return token ? {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  } : {};
};



export default