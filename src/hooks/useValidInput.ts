import React, { useCallback, useState } from 'react';

export type ValidInputOpts = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  isTouched: boolean;
  validError: string | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export type UseValidInputOpts = ((str: string) => string | null)[];

export const useValidInput = (fns: UseValidInputOpts): ValidInputOpts => {
  const [value, setValue] = useState('');
  const [validError, setValidError] = useState<null | string>(null);
  const [isTouched, setIsTouched] = useState(false);
  let couter = 0;

  const onBlur = useCallback(() => {
    setIsTouched(true);
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (couter === 0 && e.target.value.length > 2) {
      setIsTouched(true);
    }

    fns.forEach((fn) => {
      setValidError(fn(e.target.value));
    });

    couter += 1;
  }, []);

  return {
    value,
    onChange,
    onBlur,
    isError: !!(isTouched && validError),
    isTouched,
    validError,
    setValue,
  };
};
