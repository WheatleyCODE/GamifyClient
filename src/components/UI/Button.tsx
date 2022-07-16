import React, { FC } from 'react';

export type ButtonProps = {
  attr?:
    | React.HTMLAttributes<HTMLButtonElement>
    | React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
  type?: 'fill' | 'outline';
  color?: 'primary' | 'orange';
};

export const Button: FC<ButtonProps> = (props) => {
  const { attr, children, type = 'fill', color = 'primary' } = props;
  return (
    <div className="button">
      <button className={`${type} ${color}`} {...attr} type="button">
        {children}
      </button>
    </div>
  );
};
