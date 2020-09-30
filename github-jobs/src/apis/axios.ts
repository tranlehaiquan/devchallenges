import axios, { AxiosError } from 'axios';

const axiosBase = axios.create();

axiosBase.defaults.baseURL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com`;

export default axiosBase;
