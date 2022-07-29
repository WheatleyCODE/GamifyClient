import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActionCreators from '../store/action-creators/users';
import * as authActionCreators from '../store/action-creators/auth';
import * as storageActionCreators from '../store/action-creators/storage';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...usersActionCreators,
      ...authActionCreators,
      ...storageActionCreators,
    },
    dispatch,
  );
};
