import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { storageReducer } from './storageReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  storage: storageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
