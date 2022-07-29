import { Dispatch } from 'react';
import { UsersService } from '../../services/UsersService';
import { User, UserAction, UserActionTypes } from '../../types/users';

export const setUserLoadingAC = (payload: boolean): UserAction => ({
  type: UserActionTypes.SET_USER_LOADING,
  payload,
});

export const setUserErrorAC = (payload: string): UserAction => ({
  type: UserActionTypes.SET_USER_ERROR,
  payload,
});

export const setUsersAC = (payload: User[]): UserAction => ({
  type: UserActionTypes.SET_USERS,
  payload,
});

export const fetchUsersReq = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(setUserLoadingAC(true));
      const res = await UsersService.fetchUsers();
      dispatch(setUsersAC(res.data));
    } catch (e) {
      dispatch(setUserErrorAC('Произошла ошибка при загрузке пользователей'));
    }
  };
};
