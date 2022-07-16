import React, { FC } from 'react';

export type HeaderMenuItemProps = {
  children: React.ReactNode;
};

export const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ children }) => {
  return <div className="headerMenuItem">{children}</div>;
};
