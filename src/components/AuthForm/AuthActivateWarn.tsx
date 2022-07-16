import React, { FC } from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

export type AuthActivateWarnProps = {
  email: string;
};

export const AuthActivateWarn: FC<AuthActivateWarnProps> = ({ email }) => {
  return (
    <div className="authActivateWarn">
      <div className="warnIcon">
        <MdOutlineMarkEmailRead />
      </div>
      На вашу почту: <span className="email">{email}</span> было отправлено
      письмо с ссылкой для активации аккаунта
    </div>
  );
};
