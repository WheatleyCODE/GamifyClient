import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Layout } from '../components/Layout/Layout';

export const LoginPage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  return (
    <div className="login-page">
      <Layout>
        <AuthForm type="login" title="Вход" />
      </Layout>
    </div>
  );
};
