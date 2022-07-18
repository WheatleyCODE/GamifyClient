import React, { useEffect } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Layout } from '../components/Layout/Layout';
import { StorageKeys } from '../types/localStorage';
import { Resources } from '../components/design/Resources';

export const HomePage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      checkAuth();
    }
  }, []);

  return (
    <Layout>
      <div className="home-page">
        <div className="home-page__section">
          <Resources />

          <div className="home-page__image">
            <img
              alt="home"
              src="https://habitica.com/static/img/home-main@3x.23eeafe4.png"
            />

            <div className="home-page__title">
              <h1>GAMIFY PROJECT</h1>
            </div>
          </div>

          <AuthForm type="register" title="Регистрация" />
        </div>

        <div className="home-page__arrow">
          <BsChevronDoubleDown />
        </div>
      </div>
    </Layout>
  );
};
