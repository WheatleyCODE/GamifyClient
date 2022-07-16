import React, { FC } from 'react';

export type HeaderMenuProps = {
  children: React.ReactNode;
};

export const HeaderMenu: FC<HeaderMenuProps> = ({ children }) => {
  return <div className="headerMenu">{children}</div>;
};
