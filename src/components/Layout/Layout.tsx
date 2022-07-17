import React, { FC, memo } from 'react';
import { Header } from '../Header/Header';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = memo(({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children}</main>
    </div>
  );
});
