import React, { useCallback, useState } from 'react';

export type ValidInputOpts = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  isTouched: boolean;
  validError: string | null;
};

export type UseValidInputOpts = ((str: string) => string | null)[];

export const useValidInput = (fns: UseValidInputOpts): ValidInputOpts => {
  const [value, setValue] = useState('');
  const [validError, setValidError] = useState<null | string>(null);
  const [isTouched, setIsTouched] = useState(false);

  const onBlur = useCallback(() => {
    setIsTouched(true);
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    fns.forEach((fn) => {
      setValidError(fn(e.target.value));
    });
  }, []);

  return {
    value,
    onChange,
    onBlur,
    isError: !!(isTouched && validError),
    isTouched,
    validError,
  };
};
