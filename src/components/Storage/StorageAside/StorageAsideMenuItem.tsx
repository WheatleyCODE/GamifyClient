import React, { FC, memo } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

export type StorageAsideMenuItemProps = {
  text: string;
  Icon: IconType;
  path: string;
};

export const StorageAsideMenuItem: FC<StorageAsideMenuItemProps> = ({ text, Icon, path }) => {
  const MemoIcon = memo(Icon);

  return (
    <div className="storage-aside-menu-item">
      <NavLink className="storage-aside-menu-item__link" to={path}>
        <div className="storage-aside-menu-item__icon">
          <MemoIcon className="icon" />
        </div>
        {text}
      </NavLink>
    </div>
  );
};
