import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Adds } from './Adds/Adds';
import { Header } from './Header/Header';
import { HeaderMenu } from './Header/HeaderMenu';
import { HeaderMenuItem } from './Header/HeaderMenuItem';
import { HeaderSection } from './Header/HeaderSection';
import { Logo } from './Logo/Logo';
import { LogoText } from './Logo/LogoText';
import { User } from './User/User';

function App() {
  const { loading, users } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
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
        {loading && <h2>Loading...</h2>}
        <pre>{JSON.stringify(users, null, 1)}</pre>
      </main>
    </div>
  );
}

export default App;
