import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { headerMenu, headerMenuAuth } from '../../consts/headerMenus';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PathRoutes } from '../../types/routes';
import { Logo } from '../Logo/Logo';
import { LogoText } from '../Logo/LogoText';
import { Button } from '../UI/Button';
import { UserPanel } from '../User/UserPanel';
import { HeaderMenu } from './HeaderMenu';

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);
  const toLogin = useCallback(() => navigate(PathRoutes.LOGIN), [navigate]);

  const headerMenuItems = isAuth ? headerMenuAuth : headerMenu;
  const rightSide = isAuth ? (
    <UserPanel />
  ) : (
    <Button onClick={toLogin} type="outline" color="primary" text="Войти" />
  );

  return (
    <div className="header">
      <div className="header__section">
        <Logo />
        <LogoText />
        <HeaderMenu menuItems={headerMenuItems} />
      </div>
      <div className="header__section">{rightSide}</div>
    </div>
  );
});
