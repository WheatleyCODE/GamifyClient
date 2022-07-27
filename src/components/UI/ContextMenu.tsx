import React, { FC } from 'react';

export type ContextMenuProps = {
  children: React.ReactNode;
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
};

export const ContextMenu: FC<ContextMenuProps> = ({ children, left, top, right, bottom }) => {
  return (
    <div style={{ left, top, right, bottom }} className="context-menu">
      {children}
    </div>
  );
};
