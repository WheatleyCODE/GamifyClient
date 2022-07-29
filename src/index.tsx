import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppLoader } from './components/Loaders/AppLoader';
import { store } from './store/store';
import './styles/index.scss';

const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback={<AppLoader />}>
      <App />
    </Suspense>
  </Provider>,
  // </React.StrictMode>,
);
