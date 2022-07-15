/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { AuthResponse } from '../types/auth';

export const BASE_URL = 'http://192.168.0.100:5000';

const axiosIstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

axiosIstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

axiosIstance.interceptors.response.use(
  (config: any) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const res = await axios.get<AuthResponse>(
          `${BASE_URL}/api/auth/refresh`,
          { withCredentials: true },
        );
        const authResponse = res.data;
        localStorage.setItem('token', authResponse.accessToken);

        return await axiosIstance.request(originalRequest);
      } catch (e) {
        console.log('Пользователь не авторизован');
      }
    }

    throw error;
  },
);

export const $api = axiosIstance;