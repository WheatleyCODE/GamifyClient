import React, { FC, memo } from 'react';
import { HeaderMenuItem, MenuItem } from './HeaderMenuItem';

export type HeaderMenuProps = {
  menuItems: MenuItem[];
};

export const HeaderMenu: FC<HeaderMenuProps> = memo(({ menuItems }) => {
  return (
    <div className="header-menu">
      {menuItems.map((item) => (
        <HeaderMenuItem key={item.text} menuItem={item} />
      ))}
    </div>
  );
});
