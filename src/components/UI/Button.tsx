import React, { FC, memo, useCallback } from 'react';

export type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  type?: 'fill' | 'outline';
  color?: 'primary' | 'orange';
  disable?: boolean;
};

export const Button: FC<ButtonProps> = memo((props) => {
  const { onClick, text, type = 'fill', color = 'primary', disable } = props;

  const onClickHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick && !disable) {
        onClick(e);
      }
    },
    [onClick, disable],
  );

  return (
    <div className="button">
      <button
        className={`button__button ${type} ${color} ${
          disable ? 'disable' : ''
        }`}
        onClick={onClickHandler}
        type="button"
      >
        {text}
      </button>
    </div>
  );
});
