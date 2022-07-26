import React, { FC, memo } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

export type StorageAsideMenuItemProps = {
  text: string;
  Icon: IconType;
  active?: boolean;
};

export const StorageAsideMenuItem: FC<StorageAsideMenuItemProps> = ({ text, Icon, active }) => {
  const MemoIcon = memo(Icon);

  return (
    <div className={`storage-aside-menu-item ${active && 'active'}`}>
      {/* <NavLink to="/storage"> */}
      <div className="storage-aside-menu-item__icon">
        <MemoIcon className="icon" />
      </div>
      {text}
      {/* </NavLink> */}
    </div>
  );
};
