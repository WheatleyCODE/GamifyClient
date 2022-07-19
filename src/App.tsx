import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLoader } from './components/design/AppLoader';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelector';
import { HomePage } from './pages/HomePage';
import { routes, routesAuth } from './routes/routes';
import { StorageKeys } from './types/localStorage';

export const App = () => {
  const { checkAuth } = useActions();
  const { loading, isAuth } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      checkAuth();
    }
  }, []);

  const appRoutes = isAuth ? routesAuth : routes;

  if (loading) {
    return <AppLoader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
