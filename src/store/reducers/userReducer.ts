import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };

    case UserActionTypes.FETCH_USERS_SUCCES:
      return { loading: false, error: null, users: action.payload };

    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };

    default:
      return state;
  }
};
