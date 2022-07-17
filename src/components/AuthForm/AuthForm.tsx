import React, { FC, useCallback, useEffect, useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { CSSTransition } from 'react-transition-group';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link } from '../UI/Link';
import { Checkbox } from '../UI/Checkbox';
import { AuthError } from './AuthError';
import { AuthActivateWarn } from './AuthActivateWarn';
import { useValidInput } from '../../hooks/useValidInput';
import {
  emailValidator,
  lengthValidator,
  passwordValidator,
} from '../../helpers/validators';
import { isEqual } from '../../utils/isEqual';
import { getPassError } from '../../utils/getPasswordError';
import { PathRoutes } from '../../types/routes';
import { getAuthHandlers } from '../../utils/getAuthHendlers';
import { useDebounce } from '../../hooks/useDebounce';

export type AuthFormProps = {
  type: 'login' | 'register';
  title: string;
};

export const AuthForm: FC<AuthFormProps> = ({ type, title }) => {
  const { login, registration, setAuthError } = useActions();
  const { user, error } = useTypedSelector((state) => state.auth);

  const nickNameInput = useValidInput([lengthValidator]);
  const emailInput = useValidInput([emailValidator]);
  const passwordInput = useValidInput([passwordValidator]);
  const repPasswordInput = useValidInput([passwordValidator]);
  const [showPass, setShowPass] = useState(false);

  const isEqPass = isEqual(passwordInput.value, repPasswordInput.value);
  const passError = getPassError(
    isEqPass,
    passwordInput.isTouched,
    repPasswordInput.isTouched,
  );

  const handlers = getAuthHandlers(
    login,
    registration,
    emailInput,
    passwordInput,
    nickNameInput,
    passError,
  );

  const closeErrors = useDebounce(() => setAuthError(null), 300);

  useEffect(() => {
    closeErrors();
  }, [
    emailInput.value,
    passwordInput.value,
    repPasswordInput.value,
    nickNameInput.value,
  ]);

  const buttonText = type === 'login' ? 'Войти' : 'Регистрация';
  const checkboxText = type === 'login' ? 'Показать пароль' : 'Показать пароли';
  const linkPath = type === 'login' ? PathRoutes.REGISTER : PathRoutes.LOGIN;
  const linkText =
    type === 'login'
      ? 'Нет аккаунта? Зарегистрироваться'
      : 'Есть аккаунт? Войти';

  const checkboxSetShowPass = useCallback(() => setShowPass((p) => !p), []);
  const authAction = useCallback(() => handlers[type](), []);

  return (
    <div className="auth-form">
      <div className="auth-form__title">
        <h1>{title}</h1>
      </div>

      {type === 'register' && (
        <Input
          Icon={BiUser}
          value={nickNameInput.value}
          type="text"
          placeholder="Имя пользователя"
          onChange={nickNameInput.onChange}
          onBlur={nickNameInput.onBlur}
          isError={nickNameInput.isError}
          validError={nickNameInput.validError}
        />
      )}

      <Input
        Icon={MdOutlineMailOutline}
        value={emailInput.value}
        type="email"
        placeholder="Почта"
        onChange={emailInput.onChange}
        onBlur={emailInput.onBlur}
        isError={emailInput.isError}
        validError={emailInput.validError}
      />

      <Input
        Icon={RiLockPasswordLine}
        value={passwordInput.value}
        type={showPass ? 'text' : 'password'}
        placeholder="Пароль"
        onChange={passwordInput.onChange}
        onBlur={passwordInput.onBlur}
        isError={passwordInput.isError || !!passError}
        validError={passwordInput.validError || passError}
      />

      {type === 'register' && (
        <Input
          Icon={RiLockPasswordLine}
          value={repPasswordInput.value}
          type={showPass ? 'text' : 'password'}
          placeholder="Пароль"
          onChange={repPasswordInput.onChange}
          onBlur={repPasswordInput.onBlur}
          isError={repPasswordInput.isError || !!passError}
          validError={repPasswordInput.validError || passError}
        />
      )}

      <div className="auth-form__checkbox">
        <Checkbox
          label={checkboxText}
          value={showPass}
          onClick={checkboxSetShowPass}
        />
      </div>

      <hr className="auth-form__hr" />

      <Button onClick={authAction} text={buttonText} />

      <div className="auth-form__link">
        <Link text={linkText} href={linkPath} />
      </div>

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={!!user.email && !user.isActivated}
        timeout={150}
        classNames="show"
      >
        <AuthActivateWarn email={user.email} />
      </CSSTransition>

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={!!error}
        timeout={150}
        classNames="show"
      >
        <AuthError message={error} />
      </CSSTransition>
    </div>
  );
};
