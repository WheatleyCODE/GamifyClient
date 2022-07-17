import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { PathRoutes } from '../../types/routes';

export type MenuItem = {
  text: string;
  path: PathRoutes;
};

export type HeaderMenuItemProps = {
  menuItem: MenuItem;
};

export const HeaderMenuItem: FC<HeaderMenuItemProps> = memo(({ menuItem }) => {
  const { path, text } = menuItem;
  return (
    <div className="header-menu-item">
      <NavLink className="header-menu-item__link" to={path}>
        {text}
      </NavLink>
    </div>
  );
});
