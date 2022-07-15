import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../store/action-creators/user';
import * as authActionCreators from '../store/action-creators/auth';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...userActionCreators,
      ...authActionCreators,
    },
    dispatch,
  );
};
