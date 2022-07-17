import React, { FC } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

export type AuthErrorProps = {
  message: string | null;
};

export const AuthError: FC<AuthErrorProps> = ({ message }) => {
  return (
    <div className="auth-error">
      <div className="auth-error__icon">
        <BiErrorCircle />
      </div>
      {message}
    </div>
  );
};
