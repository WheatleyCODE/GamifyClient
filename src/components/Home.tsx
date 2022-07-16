import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthForm } from './AuthForm/AuthForm';
import { Layout } from './Layout/Layout';

export const Home = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
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
