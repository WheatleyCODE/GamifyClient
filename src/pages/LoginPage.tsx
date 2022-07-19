import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { Layout } from '../components/Layout/Layout';
import { StorageKeys } from '../types/localStorage';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';
import { LoginForm } from '../components/Forms/LoginForm';

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
        <LoginForm />
        <Stars />
        <Mountains />
        <Hills />
      </div>
    </Layout>
  );
};
