import React, { FC, memo, useCallback } from 'react';
import { IconType } from 'react-icons';

export type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  type?: 'fill' | 'outline';
  color?: 'primary' | 'orange';
  radius?: 'rounded' | 'default';
  Icon?: IconType;
  disable?: boolean;
};

export const Button: FC<ButtonProps> = memo((props) => {
  const { Icon, onClick, text, type = 'fill', color = 'primary', disable, radius = 'default' } = props;

  const onClickHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick && !disable) {
        onClick(e);
      }
    },
    [onClick, disable],
  );

  const MemoIcon = Icon && memo(Icon);

  return (
    <div className="button">
      <button
        className={`button__button ${type} ${color} ${radius} ${disable ? 'disable' : ''}`}
        onClick={onClickHandler}
        type="button"
      >
        {MemoIcon && (
          <div aria-hidden className="button__icon">
            <MemoIcon />
          </div>
        )}
        {text}
      </button>
    </div>
  );
});
