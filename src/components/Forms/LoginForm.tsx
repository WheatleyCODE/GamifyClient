import React, { FC, useCallback, useEffect, useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from 'react-router';
import { emailValidator, passValidator } from '../../helpers/validators';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useValidInput } from '../../hooks/useValidInput';
import { PathRoutes } from '../../types/routes';
import { Button } from '../UI/Button';
import { Checkbox } from '../UI/Checkbox';
import { Input } from '../UI/Input';
import { Link } from '../UI/Link';
import { Form } from './Form/Form';

export const LoginForm: FC = () => {
  const { login, setAuthMessage } = useActions();
  const navigate = useNavigate();
  const { message } = useTypedSelector((state) => state.auth);

  const emailInput = useValidInput([emailValidator]);
  const passwordInput = useValidInput([passValidator]);
  const [showPass, setShowPass] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  const changeShowPass = useCallback(() => setShowPass((p) => !p), []);
  const redirect = () => navigate(PathRoutes.DASHBOARD);

  const loginHandler = () => {
    if (emailInput.isError || passwordInput.isError) return;
    if (!emailInput.value || !passwordInput.value) return;

    setIsDisable(true);
    login(emailInput.value, passwordInput.value, redirect);
  };

  useEffect(() => {
    if (message) {
      setIsDisable(false);
    }
  }, [message]);

  return (
    <Form title="Вход">
      <div className="login-form">
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
          isError={passwordInput.isError}
          validError={passwordInput.validError}
        />

        <div className="login-form__container">
          <div className="login-form__checkbox">
            <Checkbox
              label="Показать пароль"
              value={showPass}
              onClick={changeShowPass}
            />
          </div>
          <div className="login-form__forgot-password">
            <Link text="Забыли пароль?" href={PathRoutes.RESET_PASSWORD} />
          </div>
        </div>

        <hr className="login-form__hr" />

        <Button disable={isDisable} onClick={loginHandler} text="Войти" />

        <div className="login-form__link">
          <Link
            text="Нет аккаунта? Зарегистрироваться"
            href={PathRoutes.REGISTER}
          />
        </div>
      </div>
    </Form>
  );
};
