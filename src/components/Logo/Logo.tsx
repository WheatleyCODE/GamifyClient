import React from 'react';
import { GiAncientSword } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { PathRoutes } from '../../types/routes';

export const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo__link" to={PathRoutes.HOME}>
        <GiAncientSword />
      </Link>
    </div>
  );
};
