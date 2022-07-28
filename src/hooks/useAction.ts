import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../store/action-creators/user';
import * as authActionCreators from '../store/action-creators/auth';
import * as storageActionCreators from '../store/action-creators/storage';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...userActionCreators,
      ...authActionCreators,
      ...storageActionCreators,
    },
    dispatch,
  );
};
