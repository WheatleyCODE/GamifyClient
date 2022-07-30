import React, { FC } from 'react';

export type BackdropProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export const Backdrop: FC<BackdropProps> = ({ onClose, children }) => (
  <div aria-hidden onClick={onClose} className="backdrop">
    {children}
  </div>
);
