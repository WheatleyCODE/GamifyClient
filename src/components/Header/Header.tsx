import React, { FC } from 'react';

export type HeaderProps = {
  children: React.ReactNode;
};

export const Header: FC<HeaderProps> = ({ children }) => {
  return <div className="header">{children}</div>;
};
