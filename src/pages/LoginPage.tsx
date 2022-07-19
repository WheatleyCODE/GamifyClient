import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';
import { LoginForm } from '../components/Forms/LoginForm';

export const LoginPage = () => {
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
