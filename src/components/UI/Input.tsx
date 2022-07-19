import React, { FC, memo, useCallback, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { CSSTransition } from 'react-transition-group';

export type InputProps = {
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  Icon?: IconType;
  type?: string;
  isError?: boolean;
  validError?: string | null;
};

export const Input: FC<InputProps> = memo((props) => {
  const { Icon, isError, validError, onBlur, onFocus, onChange, placeholder, value, type } = props;
  const ref = useRef<null | HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);

  const focusOnInput = useCallback(() => {
    if (ref.current) ref.current.focus();
  }, []);

  const onFocusInput = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(true);

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const onBlurInput = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(false);

      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const MemoIcon = Icon && memo(Icon);

  return (
    <div className={`input ${MemoIcon && 'icon'} ${isError && 'error'}`}>
      {MemoIcon && (
        <div aria-hidden onClick={focusOnInput} className="input__icon">
          <MemoIcon />
        </div>
      )}

      <input
        className="input__textfild"
        ref={ref}
        value={value}
        type={type}
        onChange={onChange}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={!!(isError && validError)}
        timeout={145}
        classNames="show"
      >
        <div className="input__valid-error">{validError}</div>
      </CSSTransition>

      <CSSTransition in={!!placeholder && !isFocus && !value} timeout={145} classNames="show-placeholder">
        <div
          aria-hidden
          onClick={focusOnInput}
          className={`input__placeholder ${(value || isFocus) && 'show-placeholder-exit-done'}`}
        >
          {placeholder}
        </div>
      </CSSTransition>
    </div>
  );
});
