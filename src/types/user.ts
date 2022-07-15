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
}
export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS_START;
}

interface FetchUserSuccesAction {
  type: UserActionTypes.FETCH_USERS_SUCCES;
  payload: User[];
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccesAction
  | FetchUserErrorAction;
