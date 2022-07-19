import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { FormMessage } from './FormMessage';

export type FormProps = {
  title: string;
  children: React.ReactNode;
};

export const Form: FC<FormProps> = ({ title, children }) => {
  const { message } = useTypedSelector((state) => state.auth);
  return (
    <div className="form">
      <div className="form__title">
        <h1>{title}</h1>
      </div>

      {children}

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={!!message}
        timeout={145}
        classNames="show-message"
      >
        <FormMessage color={message?.color} text={message?.text} />
      </CSSTransition>
    </div>
  );
};
