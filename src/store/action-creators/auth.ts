import { Dispatch } from 'react';
import axios, { AxiosError } from 'axios';
import { AuthService } from '../../services/AuthService';
import { AuthAction, AuthActionTypes, AuthMessage, AuthResponse, ResponseError } from '../../types/auth';
import { BASE_URL } from '../../http';
import { StorageKeys } from '../../types/localStorage';

export const setAuthMessageAC = (authMessage: AuthMessage | null): AuthAction => ({
  type: AuthActionTypes.SET_AUTH_MESSAGE,
  payload: authMessage,
});

export const setUserAC = (payload: AuthResponse): AuthAction => ({
  type: AuthActionTypes.SET_USER,
  payload,
});

export const removeUserAC = (): AuthAction => ({ type: AuthActionTypes.REMOVE_USER });

export const setAuthLoadingAC = (payload: boolean): AuthAction => ({
  type: AuthActionTypes.SET_AUTH_LOADING,
  payload,
});

const dispatchAuthMessage = (dispatch: Dispatch<AuthAction>, e: unknown) => {
  const error = e as AxiosError<ResponseError>;
  const message = error?.response?.data?.message;

  if (message) {
    dispatch(setAuthMessageAC({ color: 'red', text: message }));
    return;
  }

  dispatch(setAuthMessageAC({ color: 'red', text: 'Сервер не доступен' }));
};

export const loginReq = (email: string, password: string, redirect: () => void) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const res = await AuthService.login(email, password);
      const { data } = res;
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, data.accessToken);

      dispatch(setUserAC(data));
      dispatch(setAuthMessageAC({ color: 'green', text: 'Вы успешно вошли в аккаунт' }));

      // * Что-бы успело показаться сообщение об удачном входе
      setTimeout(redirect, 800);
    } catch (e: unknown) {
      dispatchAuthMessage(dispatch, e);
    }
  };
};

export const registrationReq = (nick: string, email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.registration(nick, email, password);
      dispatch(
        setAuthMessageAC({
          color: 'yellow',
          text: `На вашу почту: ${email} - было выслано письмо с ссылкой для активации аккаунта`,
        }),
      );
    } catch (e) {
      dispatchAuthMessage(dispatch, e);
    }
  };
};

export const logoutReq = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.logout();
      localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
      dispatch(removeUserAC());
    } catch (e) {
      console.log(e);
    }
  };
};

export const checkAuthReq = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch(setAuthLoadingAC(true));
      const res = await axios.get<AuthResponse>(`${BASE_URL}/api/auth/refresh`, { withCredentials: true });
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, res.data.accessToken);

      dispatch(setUserAC(res.data));
      dispatch(setAuthLoadingAC(false));
    } catch (e) {
      dispatch(setAuthLoadingAC(false));
    }
  };
};

export const resetPasswordReq = (email: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.resetPassword(email);
      dispatch(
        setAuthMessageAC({
          color: 'yellow',
          text: `На вашу почту: ${email} - было выслано письмо с ссылкой для сброса пароля`,
        }),
      );
    } catch (e) {
      dispatchAuthMessage(dispatch, e);
    }
  };
};

export const changePasswordReq = (password: string, link: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.changePassword(password, link);
      dispatch(setAuthMessageAC({ color: 'green', text: 'Пароль успешно изменен' }));
    } catch (e) {
      dispatchAuthMessage(dispatch, e);
    }
  };
};

export const loginByActivationLinkReq = (link: string, redirect: () => void) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const res = await AuthService.loginByActivationLink(link);
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, res.data.accessToken);
      dispatch(setUserAC(res.data));
    } catch (e) {
      redirect();
    }
  };
};
