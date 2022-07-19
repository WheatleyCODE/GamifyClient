import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { Layout } from '../components/Layout/Layout';
import { StorageKeys } from '../types/localStorage';
import { Stars } from '../components/design/Stars';
import { Mountains } from '../components/design/Mountans';
import { Hills } from '../components/design/Hills';
import { ResetPasswordForm } from '../components/Forms/ResetPasswordForm';

export const ResetPasswordPage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      checkAuth();
    }
  }, []);

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
