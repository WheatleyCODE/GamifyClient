import { UserAction, UserActionTypes, UserState } from '../../types/users';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case UserActionTypes.SET_USERS: {
      return {
        ...state,
        users: [...action.payload],
      };
    }

    case UserActionTypes.SET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
