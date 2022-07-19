import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
