import { User } from './user';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
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
}

interface SetUserAction {
  type: AuthActionTypes.SET_USER;
  payload: AuthResponse;
}

interface RemoveUserAction {
  type: AuthActionTypes.REMOVE_USER;
}

export type AuthAction = SetUserAction | RemoveUserAction;
