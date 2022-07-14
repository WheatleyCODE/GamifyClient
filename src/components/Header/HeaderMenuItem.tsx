import React from 'react';

export type HeaderMenuItemProps = {
  children: React.ReactNode;
};

export function HeaderMenuItem({ children }: HeaderMenuItemProps) {
  return <div className="headerMenuItem">{children}</div>;
}
