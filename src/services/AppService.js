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


export const fetchAppsService = async () => {
  try {
    const res = await axios.get(`${BASE_URL}api/apps/`, getTokenHeader());
    return res.data;
  } catch (error) {
    console.error('fetchAppsService error:', error);
    throw error;
  }
};

export const createAppsService = async (appData) => {
  try {
    const res = await axios.post(`${BASE_URL}api/apps/create/`, appData, getTokenHeader());
    return res.data;
  } catch (error) {
    console.error('createAppsService error:', error);
    throw error;
  }
};
