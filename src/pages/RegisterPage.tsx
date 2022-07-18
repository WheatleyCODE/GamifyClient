import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Layout } from '../components/Layout/Layout';
import { StorageKeys } from '../types/localStorage';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';

export const RegisterPage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      checkAuth();
    }
  }, []);

  return (
    <Layout>
      <div className="register-page">
        <AuthForm type="register" title="Регистрация" />
        <Stars />
        <Mountains />
        <Hills />
      </div>
    </Layout>
  );
};
