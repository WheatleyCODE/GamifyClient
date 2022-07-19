import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';
import { ChangePasswordForm } from '../components/Forms/ChangePasswordForm';

export const ChangePasswordPage = () => {
  return (
    <Layout>
      <div className="change-password-page">
        <ChangePasswordForm />
        <Stars />
        <Mountains />
        <Hills />
      </div>
    </Layout>
  );
};
