import React, { FC } from 'react';
import { Header } from '../Header/Header';
import { HeaderMenu } from '../Header/HeaderMenu';
import { HeaderMenuItem } from '../Header/HeaderMenuItem';
import { HeaderSection } from '../Header/HeaderSection';
import { Logo } from '../Logo/Logo';
import { LogoText } from '../Logo/LogoText';
import { Button } from '../UI/Button';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
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
          <Button type="outline" color="primary">
            Войти
          </Button>
        </HeaderSection>
      </Header>
      <main>{children}</main>
    </div>
  );
};
