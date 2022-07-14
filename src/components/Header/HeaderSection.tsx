import React from 'react';

export type HeaderSectionProps = {
  children: React.ReactNode;
};

export function HeaderSection({ children }: HeaderSectionProps) {
  return <div className="headerSection">{children}</div>;
}
