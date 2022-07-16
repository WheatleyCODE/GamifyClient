import React, { FC } from 'react';
import { IconType } from 'react-icons';

export type InputProps = {
  attr?:
    | React.HTMLAttributes<HTMLInputElement>
    | React.InputHTMLAttributes<HTMLInputElement>;
  Icon?: IconType;
};

export const Input: FC<InputProps> = (props) => {
  const { attr, Icon } = props;

  return (
    <div className={`input ${Icon && 'icon'}`}>
      {Icon && (
        <div className="icon">
          <Icon />
        </div>
      )}
      <input {...attr} />
    </div>
  );
};
