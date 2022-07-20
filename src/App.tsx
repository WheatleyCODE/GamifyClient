import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppPreLoader } from './components/Loaders/AppPreLoader';
import { useTypedSelector } from './hooks/useTypedSelector';
import { HomePage } from './pages/HomePage';
import { routes, routesAuth } from './routes/routes';

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
            {appRoutes.map(({ path, Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
