import React from 'react';
import { RegisterForm } from '../components/Forms/RegisterForm';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';

export const RegisterPage = () => {
  return (
    <div className="register-page">
      <RegisterForm />
      <Stars />
      <Mountains />
      <Hills />
    </div>
  );
};
