import React from 'react';
import { RegisterForm } from '../components/Forms/RegisterForm';
import { Layout } from '../components/Layout/Layout';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';

export const RegisterPage = () => {
  return (
    <Layout>
      <div className="register-page">
        <RegisterForm />
        <Stars />
        <Mountains />
        <Hills />
      </div>
    </Layout>
  );
};
