import React, { FC, useCallback, useEffect, useState } from 'react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useParams } from 'react-router';
import { passValidator } from '../../helpers/validators';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useValidInput } from '../../hooks/useValidInput';
import { getPassError } from '../../utils/getPasswordError';
import { isEqual } from '../../utils/isEqual';
import { Button } from '../UI/Button';
import { Checkbox } from '../UI/Checkbox';
import { Input } from '../UI/Input';
import { Form } from './Form/Form';

export const ChangePasswordForm: FC = () => {
  const { changePassword, setAuthMessage } = useActions();
  const { message } = useTypedSelector((state) => state.auth);

  const params = useParams();
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

  const changePasswordHanlder = () => {
    if (passwordInput.isError || passwordInput.isError) return;
    if (!passwordInput.value || !passwordInput.value) return;
    if (passError || !params.link) return;

    setIsDisable(true);
    changePassword(passwordInput.value, params.link);
  };

  const changeShowPass = useCallback(() => setShowPass((p) => !p), []);

  useEffect(() => {
    if (message) {
      setIsDisable(false);
    }
  }, [message]);

  useEffect(() => {
    if (message) {
      setAuthMessage(null);
    }
  }, []);

  return (
    <Form title="Изменить пароль">
      <div className="password-form">
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

        <div className="change-password-form__container">
          <div className="change-password-form__checkbox">
            <Checkbox
              label="Показать пароль"
              value={showPass}
              onClick={changeShowPass}
            />
          </div>
        </div>

        <hr className="change-password-form__hr" />

        <Button
          disable={isDisable}
          onClick={changePasswordHanlder}
          text="Изменить пароль"
        />
      </div>
    </Form>
  );
};
