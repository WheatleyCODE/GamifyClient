import React, { FC, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FiCheck } from 'react-icons/fi';

export type CheckboxProps = {
  label: string;
  value: boolean;
  onClick: () => void;
};

export const Checkbox: FC<CheckboxProps> = memo(({ label, value, onClick }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor="checkbox">
        <div className={`checkbox__square ${value && 'active'}`}>
          <CSSTransition mountOnEnter unmountOnExit in={value} timeout={150} classNames="show">
            <FiCheck />
          </CSSTransition>
        </div>
        <input className="checkbox__textfild" onClick={onClick} id="checkbox" type="checkbox" />
        <div className="checkbox__text">{label}</div>
      </label>
    </div>
  );
});
