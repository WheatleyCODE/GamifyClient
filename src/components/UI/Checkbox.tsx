import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FiCheck } from 'react-icons/fi';

export type CheckboxProps = {
  children: React.ReactNode;
  value: boolean;
  onClick: () => void;
};

export const Checkbox: FC<CheckboxProps> = ({ children, value, onClick }) => {
  return (
    <div className="checkbox">
      <label className="label" htmlFor="checkbox">
        <div className={`checkbox-square ${value && 'active'}`}>
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={value}
            timeout={150}
            classNames="show"
          >
            <FiCheck />
          </CSSTransition>
        </div>
        <input onClick={onClick} id="checkbox" type="checkbox" />
        <div className="text">{children}</div>
      </label>
    </div>
  );
};
