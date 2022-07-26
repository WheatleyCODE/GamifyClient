import React from 'react';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';
import { ResetPasswordForm } from '../components/Forms/ResetPasswordForm';

export const ResetPasswordPage = () => {
  return (
    <div className="reset-password-page">
      <ResetPasswordForm />
      <Stars />
      <Mountains />
      <Hills />
    </div>
  );
};
