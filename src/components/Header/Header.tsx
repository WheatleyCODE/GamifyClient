import React from 'react';

export type HeaderProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return <div className="header">{children}</div>;
}
