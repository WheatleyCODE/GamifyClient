import React from 'react';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';
import { LoginForm } from '../components/Forms/LoginForm';

export const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginForm />
      <Stars />
      <Mountains />
      <Hills />
    </div>
  );
};
