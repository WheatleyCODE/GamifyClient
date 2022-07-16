import { User } from './user';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface ResponseError {
  message: string;
  statusCode: number;
}

export interface AuthState {
  user: User;
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
  loading: boolean;
  error: null | string;
}

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER',
  SET_AUTH_ERROR = 'SET_AUTH_ERROR',
}

interface SetAuthErrorAction {
  type: AuthActionTypes.SET_AUTH_ERROR;
  payload: string | null;
}
interface SetUserAction {
  type: AuthActionTypes.SET_USER;
  payload: AuthResponse;
}

interface RemoveUserAction {
  type: AuthActionTypes.REMOVE_USER;
}

export type AuthAction = SetUserAction | RemoveUserAction | SetAuthErrorAction;
