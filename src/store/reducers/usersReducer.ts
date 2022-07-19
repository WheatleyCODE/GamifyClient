import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS_START: {
      return { ...state, loading: true };
    }

    case UserActionTypes.FETCH_USERS_SUCCES: {
      return { ...state, loading: false, users: action.payload };
    }

    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
