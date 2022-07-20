import React from 'react';
import { GiAncientSword } from 'react-icons/gi';

export const AppPreLoader = () => {
  return (
    <div className="app-loader">
      <div className="app-loader__logo">
        <GiAncientSword className="icon" />
      </div>
    </div>
  );
};
