import { Dispatch } from 'react';
import axios, { AxiosError } from 'axios';
import { AuthService } from '../../services/AuthService';
import {
  AuthAction,
  AuthActionTypes,
  AuthResponse,
  ResponseError,
} from '../../types/auth';
import { BASE_URL } from '../../http';

function dispathError(dispatch: Dispatch<AuthAction>, e: unknown) {
  const error = e as AxiosError<ResponseError>;
  const message = error?.response?.data?.message;

  if (message) {
    dispatch({ type: AuthActionTypes.SET_AUTH_ERROR, payload: message });
    return;
  }

  dispatch({
    type: AuthActionTypes.SET_AUTH_ERROR,
    payload: 'Сервер не доступен',
  });
}

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
    } catch (e: unknown) {
      dispathError(dispatch, e);
    }
  };
};

export const registration = (nick: string, email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await AuthService.registration(nick, email, password);
      const authResponse = response.data;

      localStorage.setItem('token', authResponse.accessToken);

      dispatch({
        type: AuthActionTypes.SET_USER,
        payload: authResponse,
      });
    } catch (e) {
      dispathError(dispatch, e);
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

export const setAuthError = (error: string | null): AuthAction => ({
  type: AuthActionTypes.SET_AUTH_ERROR,
  payload: error,
});
