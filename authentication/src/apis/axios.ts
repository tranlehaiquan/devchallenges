import axios, { AxiosInstance } from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:5001/devchallenge-quan/us-central1/api`
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