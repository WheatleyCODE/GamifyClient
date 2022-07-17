import React from 'react';
import { Link } from 'react-router-dom';
import { PathRoutes } from '../../types/routes';

export const LogoText = () => {
  return (
    <div className="logo-text">
      <Link className="logo-text__link" to={PathRoutes.HOME}>
        <span className="logo-text__title">Gamify</span>
      </Link>
    </div>
  );
};
