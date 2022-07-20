import { Dispatch } from 'react';
import axios, { AxiosError } from 'axios';
import { AuthService } from '../../services/AuthService';
import { AuthAction, AuthActionTypes, AuthMessage, AuthResponse, ResponseError } from '../../types/auth';
import { BASE_URL } from '../../http';
import { StorageKeys } from '../../types/localStorage';

function dispathAuthMessage(dispatch: Dispatch<AuthAction>, e: unknown) {
  const error = e as AxiosError<ResponseError>;
  const message = error?.response?.data?.message;

  if (message) {
    dispatch({
      type: AuthActionTypes.SET_AUTH_MESSAGE,
      payload: {
        color: 'red',
        text: message,
      },
    });
    return;
  }

  dispatch({
    type: AuthActionTypes.SET_AUTH_MESSAGE,
    payload: {
      color: 'red',
      text: 'Сервер не доступен',
    },
  });
}

export const login = (email: string, password: string, redirect: () => void) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const res = await AuthService.login(email, password);
      const { data } = res;

      localStorage.setItem(StorageKeys.ACCESS_TOKEN, data.accessToken);

      dispatch({
        type: AuthActionTypes.SET_USER,
        payload: data,
      });

      dispatch({
        type: AuthActionTypes.SET_AUTH_MESSAGE,
        payload: {
          color: 'green',
          text: 'Вы успешно вошли в аккаунт',
        },
      });

      // * Что-бы успело показаться сообщение об удачном входе
      setTimeout(redirect, 800);
    } catch (e: unknown) {
      dispathAuthMessage(dispatch, e);
    }
  };
};

export const registration = (nick: string, email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.registration(nick, email, password);

      dispatch({
        type: AuthActionTypes.SET_AUTH_MESSAGE,
        payload: {
          color: 'yellow',
          text: 'На вашу почту было выслано письмо с ссылкой для активации аккаунта',
        },
      });
    } catch (e) {
      dispathAuthMessage(dispatch, e);
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.logout();

      localStorage.removeItem(StorageKeys.ACCESS_TOKEN);

      dispatch({ type: AuthActionTypes.REMOVE_USER });
    } catch (e) {
      console.log(e);
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.SET_LOADING, payload: true });
      const res = await axios.get<AuthResponse>(`${BASE_URL}/api/auth/refresh`, { withCredentials: true });

      const { data } = res;
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, data.accessToken);

      dispatch({ type: AuthActionTypes.SET_USER, payload: data });
      dispatch({ type: AuthActionTypes.SET_LOADING, payload: false });
    } catch (e) {
      dispatch({ type: AuthActionTypes.SET_LOADING, payload: false });
    }
  };
};

export const setAuthMessage = (message: AuthMessage | null): AuthAction => ({
  type: AuthActionTypes.SET_AUTH_MESSAGE,
  payload: message,
});

export const resetPassword = (email: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.resetPassword(email);

      dispatch({
        type: AuthActionTypes.SET_AUTH_MESSAGE,
        payload: {
          color: 'yellow',
          text: 'На вашу почту было выслано письмо с ссылкой для сброса пароля',
        },
      });
    } catch (e) {
      dispathAuthMessage(dispatch, e);
    }
  };
};

export const changePassword = (password: string, link: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.changePassword(password, link);

      dispatch({
        type: AuthActionTypes.SET_AUTH_MESSAGE,
        payload: {
          color: 'green',
          text: 'Пароль успешно изменен',
        },
      });
    } catch (e) {
      dispathAuthMessage(dispatch, e);
    }
  };
};

export const loginByActivationLink = (link: string, redirect: () => void) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const res = await AuthService.loginByActivationLink(link);
      const { data } = res;

      localStorage.setItem(StorageKeys.ACCESS_TOKEN, data.accessToken);

      dispatch({
        type: AuthActionTypes.SET_USER,
        payload: data,
      });
    } catch (e) {
      redirect();
    }
  };
};
