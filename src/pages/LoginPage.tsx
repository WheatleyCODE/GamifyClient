import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Layout } from '../components/Layout/Layout';
import { StorageKeys } from '../types/localStorage';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';

export const LoginPage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      checkAuth();
    }
  }, []);

  return (
    <Layout>
      <div className="login-page">
        <AuthForm type="login" title="Вход" />
        <Stars />
        <Mountains />
        <Hills />
      </div>
    </Layout>
  );
};
