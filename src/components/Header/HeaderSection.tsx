import React, { FC } from 'react';

export type HeaderSectionProps = {
  children: React.ReactNode;
};

export const HeaderSection: FC<HeaderSectionProps> = ({ children }) => {
  return <div className="headerSection">{children}</div>;
};
