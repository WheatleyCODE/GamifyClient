import React, { FC, useEffect, useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { emailValidator } from '../../helpers/validators';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useValidInput } from '../../hooks/useValidInput';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Form } from './Form/Form';

export const ResetPasswordForm: FC = () => {
  const { resetPassword } = useActions();
  const { message } = useTypedSelector((state) => state.auth);
  const emailInput = useValidInput([emailValidator]);
  const [isDisable, setIsDisable] = useState(false);

  const resetPasswordHanlder = () => {
    if (!emailInput.isError && emailInput.value) {
      setIsDisable(true);
      resetPassword(emailInput.value);
    }
  };

  useEffect(() => {
    if (message) setIsDisable(false);
  }, [message]);

  return (
    <Form title="Сбросить пароль">
      <div className="reset-password-form">
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

        <hr className="reset-password-form__hr" />

        <Button disable={isDisable} onClick={resetPasswordHanlder} text="Cбросить пароль" />
      </div>
    </Form>
  );
};
