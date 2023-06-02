import axios from 'axios';

// Environmental Variables
const BASEURL = process.env.REACT_APP_BASE_URL;
const APIKEY = process.env.REACT_APP_API_KEY;

// News method
export const getLatestNews = async () => {
  const response = await axios.get(`${BASEURL}top-headlines?country=us&apiKey=${APIKEY}`);
  return response;
};

export const getPopularNews = async () => {
  const response = await axios.get(`${BASEURL}everything?q=bitcoin&pageSize=8&apiKey=${APIKEY}`);
  return response;
};
