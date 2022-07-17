import React, { FC, memo } from 'react';

export type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  type?: 'fill' | 'outline';
  color?: 'primary' | 'orange';
};

export const Button: FC<ButtonProps> = memo((props) => {
  const { onClick, text, type = 'fill', color = 'primary' } = props;
  return (
    <div className="button">
      <button
        className={`button__button ${type} ${color}`}
        onClick={onClick}
        type="button"
      >
        {text}
      </button>
    </div>
  );
});
