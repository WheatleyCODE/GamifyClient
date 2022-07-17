import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Layout } from '../components/Layout/Layout';

export const RegisterPage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  return (
    <div className="register-page">
      <Layout>
        <AuthForm type="register" title="Регистрация" />
      </Layout>
    </div>
  );
};
