import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Adds } from './Adds/Adds';
import { AuthForm } from './AuthForm/AuthForm';
import { Header } from './Header/Header';
import { HeaderMenu } from './Header/HeaderMenu';
import { HeaderMenuItem } from './Header/HeaderMenuItem';
import { HeaderSection } from './Header/HeaderSection';
import { Logo } from './Logo/Logo';
import { LogoText } from './Logo/LogoText';
import { User } from './User/User';

function App() {
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
      <Header>
        <HeaderSection>
          <Logo />
          <LogoText />
          <HeaderMenu>
            <HeaderMenuItem>Главная</HeaderMenuItem>
            <HeaderMenuItem>Контакты</HeaderMenuItem>
            <HeaderMenuItem>Клиенты</HeaderMenuItem>
          </HeaderMenu>
        </HeaderSection>
        <HeaderSection>
          <Adds />
          <User />
        </HeaderSection>
      </Header>
      <main>
        <AuthForm />
        {loading && <h2>Loading...</h2>}
        <pre>{JSON.stringify(users, null, 1)}</pre>
        <pre>{JSON.stringify(user, null, 1)}</pre>
        <button onClick={onClickHandler} type="button">
          Запросить пользователей
        </button>
      </main>
    </div>
  );
}

export default App;
