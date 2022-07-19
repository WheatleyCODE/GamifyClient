import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';
import { ResetPasswordForm } from '../components/Forms/ResetPasswordForm';

export const ResetPasswordPage = () => {
  return (
    <Layout>
      <div className="reset-password-page">
        <ResetPasswordForm />
        <Stars />
        <Mountains />
        <Hills />
      </div>
    </Layout>
  );
};
