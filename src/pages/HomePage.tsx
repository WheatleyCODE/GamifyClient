import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { RegisterForm } from '../components/Forms/RegisterForm';
import { Resources } from '../components/design/Resources';

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__section">
        <Resources />

        <div className="home-page__image">
          <img alt="home" src="https://habitica.com/static/img/home-main@3x.23eeafe4.png" />

          <div className="home-page__title">
            <h1>GAMIFY PROJECT</h1>
          </div>
        </div>

        <RegisterForm />
      </div>

      <div className="home-page__arrow">
        <BsChevronDoubleDown />
      </div>
    </div>
  );
};
