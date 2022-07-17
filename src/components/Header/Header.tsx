import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { headerMenu } from '../../consts/headerMenus';
import { PathRoutes } from '../../types/routes';
import { Logo } from '../Logo/Logo';
import { LogoText } from '../Logo/LogoText';
import { Button } from '../UI/Button';
import { HeaderMenu } from './HeaderMenu';

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const toLogin = useCallback(() => navigate(PathRoutes.LOGIN), [navigate]);

  return (
    <div className="header">
      <div className="header__section">
        <Logo />
        <LogoText />
        <HeaderMenu menuItems={headerMenu} />
      </div>
      <div className="header__section">
        <Button onClick={toLogin} type="outline" color="primary" text="Войти" />
      </div>
    </div>
  );
});
