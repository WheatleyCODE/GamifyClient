import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Layout } from '../components/Layout/Layout';

export const HomePage = () => {
  const { loading, users } = useTypedSelector((state) => state.user);
  const { user } = useTypedSelector((state) => state.auth);
  const { fetchUsers, checkAuth } = useActions();

  const onClickHandler = () => {
    fetchUsers();
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  return (
    <div className="home-page">
      <Layout>
        <AuthForm type="register" title="Регистрация" />
        {loading && <h2>Loading...</h2>}
        <pre>{JSON.stringify(users, null, 1)}</pre>
        <pre>{JSON.stringify(user, null, 1)}</pre>
        <button onClick={onClickHandler} type="button">
          Запросить пользователей
        </button>
      </Layout>
    </div>
  );
};
