import { AuthAction, AuthActionTypes, AuthState } from '../../types/auth';
import { User } from '../../types/user';

const initialState: AuthState = {
  user: {} as User,
  isAuth: false,
  accessToken: '',
  refreshToken: '',
  loading: false,
  message: null,
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_LOADING: {
      return { ...state, loading: action.payload };
    }

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

    case AuthActionTypes.SET_AUTH_MESSAGE: {
      const data = action.payload;

      if (data) return { ...state, message: { ...data } };

      return { ...state, message: data };
    }

    default:
      return { ...state };
  }
};
