import React, { FC, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useActions } from '../../../hooks/useAction';
import { useFirstRender } from '../../../hooks/useFirstRender';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { FormMessage } from './FormMessage';

export type FormProps = {
  title: string;
  children: React.ReactNode;
};

export const Form: FC<FormProps> = ({ title, children }) => {
  const { setAuthMessage } = useActions();
  const { message } = useTypedSelector((state) => state.auth);
  const isFirst = useFirstRender();

  useEffect(() => {
    if (isFirst && message) {
      setAuthMessage(null);
    }
  }, []);

  return (
    <div className="form">
      <div className="form__title">
        <h1>{title}</h1>
      </div>

      {children}

      {!isFirst && (
        <CSSTransition mountOnEnter unmountOnExit in={!!message} timeout={145} classNames="show-message">
          <FormMessage color={message?.color} text={message?.text} />
        </CSSTransition>
      )}
    </div>
  );
};
