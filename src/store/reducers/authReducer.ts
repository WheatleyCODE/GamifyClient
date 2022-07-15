/* eslint-disable @typescript-eslint/default-param-last */
import { AuthAction, AuthActionTypes, AuthState } from '../../types/auth';
import { User } from '../../types/user';

const initialState: AuthState = {
  user: {} as User,
  isAuth: false,
  accessToken: '',
  refreshToken: '',
  loading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER: {
      const { user, accessToken, refreshToken } = action.payload;

      return { ...state, isAuth: true, user, accessToken, refreshToken };
    }

    case AuthActionTypes.REMOVE_USER:
      return {
        ...state,
        isAuth: false,
        user: {} as User,
        accessToken: '',
        refreshToken: '',
      };

    default:
      return state;
  }
};
