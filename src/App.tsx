import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useActions } from './hooks/useAction';
import { routes } from './routes/routes';
import { StorageKeys } from './types/localStorage';

export const App = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      checkAuth();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
