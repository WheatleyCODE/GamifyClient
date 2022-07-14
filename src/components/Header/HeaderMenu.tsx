import React from 'react';

export type HeaderMenuProps = {
  children: React.ReactNode;
};

export function HeaderMenu({ children }: HeaderMenuProps) {
  return <div className="headerMenu">{children}</div>;
}
