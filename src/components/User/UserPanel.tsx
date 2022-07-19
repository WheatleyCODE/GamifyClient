import React, { useCallback } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const UserPanel = () => {
  const { logout } = useActions();
  const { user } = useTypedSelector((state) => state.auth);

  const logoutHandler = useCallback(() => logout(), []);

  return (
    <div className="user-panel">
      <div aria-hidden onClick={logoutHandler} className="user-panel__user">
        <span className="user-panel__nick-name">
          {user.nickName.toUpperCase()}
        </span>
        <FaUserAstronaut />
      </div>
    </div>
  );
};
