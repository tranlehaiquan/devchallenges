import axios, { AxiosInstance } from 'axios';

const axiosConfig = {
  baseURL: process.env.FUNCTIONS_URL,
};

console.log(axiosConfig);

const axiosInstance = axios.create({
  baseURL: `${axiosConfig.baseURL}/api`
});

export const setHeaderAuth = (token: string): AxiosInstance => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }

  return axiosInstance;
};

export const clearHeaderAuth = (): AxiosInstance => {
  return setHeaderAuth('');
};

export default axiosInstance;