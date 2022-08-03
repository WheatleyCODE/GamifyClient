import React, { FC, useCallback, useEffect } from 'react';
import { Button } from '../UI/Button';
import { Backdrop } from './Backdrop';

export type ConfirmProps = {
  children: React.ReactNode;
  onClose: () => void;
  closeText: string;
  onUpProve: () => void;
  upProveText: string;
};

export const Confirm: FC<ConfirmProps> = ({ children, onClose, onUpProve, closeText, upProveText }) => {
  useEffect(() => {
    const { platform } = window.navigator;
    if (platform === 'Win32') {
      document.body.classList.add('win');
    } else {
      document.body.classList.add('mac');
    }

    return () => {
      document.body.classList.remove('win');
      document.body.classList.remove('mac');
    };
  }, []);

  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation(), []);

  return (
    <Backdrop onClose={onClose}>
      <div aria-hidden onClick={stopPropagation} className="confirm">
        {children}
        <div className="confirm__buttons">
          <Button onClick={onClose} color="orange" type="fill" text={closeText} />
          <Button onClick={onUpProve} type="fill" text={upProveText} />
        </div>
      </div>
    </Backdrop>
  );
};
