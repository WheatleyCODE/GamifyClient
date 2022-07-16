import React, { FC } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

export type AuthErrorProps = {
  message: string | null;
};

export const AuthError: FC<AuthErrorProps> = ({ message }) => {
  return (
    <div className="authError">
      <div className="errorIcon">
        <BiErrorCircle />
      </div>
      {message}
    </div>
  );
};
