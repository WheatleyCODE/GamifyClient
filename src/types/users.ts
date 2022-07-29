export enum UserRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
}

export interface User {
  email: string;
  id: string;
  isActivated: boolean;
  roles: UserRoles[];
  nickName: string;
  firstName: string | null;
  lastName: string | null;
  activationLink: string;
  storage: string;
}
export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  SET_USER_LOADING = 'SET_USER_LOADING',
  SET_USERS = 'SET_USERS',
  SET_USER_ERROR = 'SET_USER_ERROR',
}

interface SetUserLoadingAction {
  type: UserActionTypes.SET_USER_LOADING;
  payload: boolean;
}

interface SetUsersAction {
  type: UserActionTypes.SET_USERS;
  payload: User[];
}

interface SetUserErrorAction {
  type: UserActionTypes.SET_USER_ERROR;
  payload: string;
}

export type UserAction = SetUserLoadingAction | SetUsersAction | SetUserErrorAction;
