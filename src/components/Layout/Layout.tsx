import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header/Header';

export const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
};
