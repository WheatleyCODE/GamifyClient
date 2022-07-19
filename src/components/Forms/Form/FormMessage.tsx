import React, { FC, memo, useCallback } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { useActions } from '../../../hooks/useAction';

export type FormMessageProps = {
  text?: string;
  color?: 'green' | 'yellow' | 'red';
};

export const FormMessage: FC<FormMessageProps> = memo(({ text, color }) => {
  const { setAuthMessage } = useActions();
  const close = useCallback(() => setAuthMessage(null), []);

  return (
    <div className={`form-message ${color}`}>
      <div className="form-message__icon">
        <BiErrorCircle />
      </div>
      {text}

      <div aria-hidden onClick={close} className="form-message__close">
        <CgClose />
      </div>
    </div>
  );
});
