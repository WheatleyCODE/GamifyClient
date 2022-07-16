import React, { FC } from 'react';

export type LikProps = {
  children: React.ReactNode;
  href: string;
};

export const Link: FC<LikProps> = ({ children, href }) => {
  return <div className="link">{children}</div>;
};
