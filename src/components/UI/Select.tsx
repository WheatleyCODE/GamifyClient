import React, { FC, memo, useCallback, useRef, useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { IconType } from 'react-icons/lib';
import { CSSTransition } from 'react-transition-group';
import { AccessType } from '../../types/storage';

export type SelectItem = {
  text: string;
  value: AccessType;
};

export type SelectProps = {
  placeholder?: string;
  value?: SelectItem;
  Icon?: IconType;
  onChange: (e: SelectItem) => void;
  selectItems: SelectItem[];
};

export const Select: FC<SelectProps> = memo(({ placeholder, value, Icon, selectItems, onChange }) => {
  const ref = useRef<null | HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);

  const focusOnInput = useCallback(() => {
    if (ref.current) ref.current.focus();
  }, []);

  const onFocusInput = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlurInput = useCallback(() => {
    setIsFocus(false);
  }, []);

  const MemoIcon = Icon && memo(Icon);
  const ArrowIcon = memo(AiOutlineCaretDown);

  const Items = selectItems.map((item) => {
    const func = () => {
      onChange(item);
    };

    return (
      <div aria-hidden onClick={func} className="select__item">
        <span>{item.text}</span>
      </div>
    );
  });

  return (
    <div className={`select ${MemoIcon && 'icon'}`}>
      {MemoIcon && (
        <div aria-hidden onClick={focusOnInput} className="select__icon">
          <MemoIcon />
        </div>
      )}

      <input
        readOnly
        value={value?.text}
        className="select__textfild"
        ref={ref}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />

      <div aria-hidden onClick={focusOnInput} className="select__arrow-icon">
        <ArrowIcon />
      </div>

      <CSSTransition in={!!placeholder && !isFocus && !value} timeout={145} classNames="show-placeholder">
        <div
          aria-hidden
          onClick={focusOnInput}
          className={`select__placeholder ${(isFocus || value) && 'show-placeholder-exit-done'}`}
        >
          {placeholder}
        </div>
      </CSSTransition>

      <CSSTransition mountOnEnter unmountOnExit in={isFocus} timeout={145} classNames="show">
        <div className="select__items">{Items}</div>
      </CSSTransition>
    </div>
  );
});
