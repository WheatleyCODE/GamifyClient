import React, { FC } from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

export type AuthActivateWarnProps = {
  email: string;
};

export const AuthActivateWarn: FC<AuthActivateWarnProps> = ({ email }) => {
  return (
    <div className="auth-activate-warn">
      <div className="auth-activate-warn__icon">
        <MdOutlineMarkEmailRead />
      </div>
      На вашу почту: <span className="auth-activate-warn__email">{email}</span>
      было отправлено письмо с ссылкой для активации аккаунта
    </div>
  );
};
