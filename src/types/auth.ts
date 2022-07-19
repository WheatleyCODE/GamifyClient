import { User } from './user';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface ResetPassResponse {
  message: string;
  email: string;
}

export interface ChangePassResponse {
  message: string;
}

export interface ResponseError {
  message: string;
  statusCode: number;
}

export interface AuthMessage {
  color: 'green' | 'yellow' | 'red';
  text: string;
}

export interface AuthState {
  user: User;
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
  loading: boolean;
  message: null | AuthMessage;
}

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER',
  SET_AUTH_MESSAGE = 'SET_AUTH_MESSAGE',
}

interface SetAuthMessageAction {
  type: AuthActionTypes.SET_AUTH_MESSAGE;
  payload: AuthMessage | null;
}
interface SetUserAction {
  type: AuthActionTypes.SET_USER;
  payload: AuthResponse;
}

interface RemoveUserAction {
  type: AuthActionTypes.REMOVE_USER;
}

export type AuthAction =
  | SetUserAction
  | RemoveUserAction
  | SetAuthMessageAction;
