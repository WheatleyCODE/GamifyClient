import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
