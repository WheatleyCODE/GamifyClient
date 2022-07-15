import { Dispatch } from 'react';
import axios from 'axios';
import { AuthService } from '../../services/AuthService';
import { AuthAction, AuthActionTypes, AuthResponse } from '../../types/auth';
import { BASE_URL } from '../../http';

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await AuthService.login(email, password);
      const authResponse = response.data;

      localStorage.setItem('token', authResponse.accessToken);

      dispatch({
        type: AuthActionTypes.SET_USER,
        payload: authResponse,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const registration = (nick: string, email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await AuthService.registration(nick, email, password);
      const authResponse = response.data;

      dispatch({
        type: AuthActionTypes.SET_USER,
        payload: authResponse,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.logout();

      localStorage.removeItem('token');

      dispatch({ type: AuthActionTypes.REMOVE_USER });
    } catch (e) {
      console.log(e);
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const res = await axios.get<AuthResponse>(
        `${BASE_URL}/api/auth/refresh`,
        { withCredentials: true },
      );
      const authResponse = res.data;
      localStorage.setItem('token', authResponse.accessToken);

      dispatch({ type: AuthActionTypes.SET_USER, payload: authResponse });
    } catch (e) {
      console.log(e);
    }
  };
};
