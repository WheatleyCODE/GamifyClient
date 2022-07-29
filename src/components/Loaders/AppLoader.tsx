import React, { useEffect } from 'react';
import { GiAncientSword } from 'react-icons/gi';
import { useActions } from '../../hooks/useAction';
import { StorageKeys } from '../../types/localStorage';

export const AppLoader = () => {
  const { checkAuthReq } = useActions();

  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      checkAuthReq();
    }
  }, []);

  return (
    <div className="app-loader">
      <div className="app-loader__logo">
        <GiAncientSword className="icon" />
      </div>
    </div>
  );
};
