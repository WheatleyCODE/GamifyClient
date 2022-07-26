import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AppPreLoader } from './components/Loaders/AppPreLoader';
import { useTypedSelector } from './hooks/useTypedSelector';
import { HomePage } from './pages/HomePage';
import { routesAuth } from './routes/routesAuth';
import { routes } from './routes/routes';

const App = () => {
  const { loading, isAuth } = useTypedSelector((state) => state.auth);

  if (loading) {
    return <AppPreLoader />;
  }

  const appRoutes = isAuth ? routesAuth : routes;

  return (
    <div>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              {appRoutes.map(({ path, Page, childrens }) => {
                if (childrens.length) {
                  return (
                    <Route index={path === '/'} key={path} path={path} element={<Page />}>
                      {childrens.map((child) => {
                        const { Component } = child;
                        return <Route key={child.path} path={child.path} element={<Component />} />;
                      })}
                    </Route>
                  );
                }

                return <Route index={path === '/'} key={path} path={path} element={<Page />} />;
              })}
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
