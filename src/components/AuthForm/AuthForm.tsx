import React, { FC, useEffect, useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { CSSTransition } from 'react-transition-group';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link } from '../UI/Link';
import { Checkbox } from '../UI/Checkbox';
import { AuthError } from './AuthError';
import { AuthActivateWarn } from './AuthActivateWarn';

export type AuthFormProps = {
  type: 'login' | 'register';
  title: string;
};

export const AuthForm: FC<AuthFormProps> = ({ type, title }) => {
  const { login, registration, setAuthError } = useActions();
  const { user, error } = useTypedSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handlers = {
    login: () => {
      login(email, password);
    },

    register: () => {
      registration(nickName, email, password);
    },
  };

  useEffect(() => {
    // ! Ljбавить сюда дебоунс
    setAuthError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, repPassword, nickName]);

  return (
    <div className="authForm">
      <form action="POST">
        <div className="title">
          <h1>{title}</h1>
        </div>
        {type === 'register' && (
          <Input
            Icon={BiUser}
            attr={{
              value: nickName,
              type: 'text',
              placeholder: 'Имя пользователя',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setNickName(e.target.value);
              },
            }}
          />
        )}
        <Input
          Icon={MdOutlineMailOutline}
          attr={{
            value: email,
            type: 'email',
            placeholder: 'Почта',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            },
          }}
        />
        <Input
          Icon={RiLockPasswordLine}
          attr={{
            value: password,
            type: showPass ? 'text' : 'password',
            placeholder: 'Пароль',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            },
          }}
        />
        {type === 'register' && (
          <Input
            Icon={RiLockPasswordLine}
            attr={{
              value: repPassword,
              type: showPass ? 'text' : 'password',
              placeholder: 'Подтвердите пароль',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setRepPassword(e.target.value);
              },
            }}
          />
        )}
        <div className="checkboxes">
          <Checkbox value={showPass} onClick={() => setShowPass((p) => !p)}>
            {type === 'login' ? 'Показать пароль' : 'Показать пароли'}
          </Checkbox>
        </div>
        <hr className="hr" />
        <Button attr={{ onClick: handlers[type] }}>
          {type === 'login' ? 'Войти' : 'Регистрация'}
        </Button>
        <div className="links">
          <Link href="ds">
            {type === 'login'
              ? 'Нет аккаунта? Зарегистрироваться'
              : 'Есть аккаунт? Войти'}
          </Link>
        </div>
      </form>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={!!user.email && !user.isActivated}
        timeout={150}
        classNames="show"
      >
        <AuthActivateWarn email={user.email} />
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={!!error}
        timeout={150}
        classNames="show"
      >
        <AuthError message={error} />
      </CSSTransition>
    </div>
  );
};
