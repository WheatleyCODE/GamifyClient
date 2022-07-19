import React, { FC, useCallback, useEffect, useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { useActions } from '../../hooks/useAction';
import { Link } from '../UI/Link';
import { Checkbox } from '../UI/Checkbox';
import { useValidInput } from '../../hooks/useValidInput';
import {
  emailValidator,
  nickValidator,
  passValidator,
} from '../../helpers/validators';
import { isEqual } from '../../utils/isEqual';
import { getPassError } from '../../utils/getPasswordError';
import { PathRoutes } from '../../types/routes';
import { Form } from './Form/Form';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const RegisterForm: FC = () => {
  const { registration, setAuthMessage } = useActions();
  const { message } = useTypedSelector((state) => state.auth);

  const nickNameInput = useValidInput([nickValidator]);
  const emailInput = useValidInput([emailValidator]);
  const passwordInput = useValidInput([passValidator]);
  const repPasswordInput = useValidInput([passValidator]);
  const [showPass, setShowPass] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  const isEqPass = isEqual(passwordInput.value, repPasswordInput.value);
  const passError = getPassError(
    isEqPass,
    passwordInput.isTouched,
    repPasswordInput.isTouched,
  );

  useEffect(() => {
    if (message) {
      setIsDisable(false);
    }
  }, [message]);

  const changeShowPass = useCallback(() => setShowPass((p) => !p), []);

  const registerHandler = () => {
    if (emailInput.isError || passwordInput.isError) return;
    if (nickNameInput.isError || passError) return;
    if (!nickNameInput.value || !emailInput.value) return;
    if (!passwordInput.value) return;

    setIsDisable(true);
    registration(nickNameInput.value, emailInput.value, passwordInput.value);
  };

  return (
    <Form title="Регистрация">
      <div className="register-form">
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

        <div className="register-form__container">
          <div className="register-form__checkbox">
            <Checkbox
              label="Показать пароли"
              value={showPass}
              onClick={changeShowPass}
            />
          </div>
          <div className="register-form__forgot-password">
            <Link text="Забыли пароль?" href={PathRoutes.RESET_PASSWORD} />
          </div>
        </div>

        <hr className="register-form__hr" />

        <Button
          disable={isDisable}
          onClick={registerHandler}
          text="Зарегистрироваться"
        />

        <div className="register-form__link">
          <Link text="Есть аккаунт? Войти" href={PathRoutes.LOGIN} />
        </div>
      </div>
    </Form>
  );
};
