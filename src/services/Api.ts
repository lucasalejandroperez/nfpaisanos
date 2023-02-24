import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
export default Api;

Api.interceptors.response.use((response: any) => response,
  async (error:any) => {
    // eslint-disable-next-line
    console.log(error);
  });

Api.interceptors.request.use((config: any) => {
  const token = process.env.REACT_APP_KEY;
  return {
    ...config,
    headers: {
      apiKey: token,
    },
  };
});