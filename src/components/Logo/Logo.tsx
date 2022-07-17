import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { PathRoutes } from '../../types/routes';

export const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo__link" to={PathRoutes.HOME}>
        <AiFillAppstore />
      </Link>
    </div>
  );
};
