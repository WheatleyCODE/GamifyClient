import React, { useState } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export function AuthForm() {
  const { login, registration, logout } = useActions();
  const { isAuth } = useTypedSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');

  const loginHandler = () => {
    login(email, password);
  };

  const registerHandler = () => {
    registration(nickName, email, password);
  };

  const logoutHandler = () => {
    logout();
  };

  return (
    <div className="authForm">
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />
      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <br />
      <input
        onChange={(e) => setNickName(e.target.value)}
        value={nickName}
        placeholder="NickName"
      />
      <br />
      <button onClick={loginHandler} type="button">
        Логин
      </button>
      <button onClick={registerHandler} type="button">
        Регистрация
      </button>
      {isAuth && (
        <button onClick={logoutHandler} type="button">
          Выйти
        </button>
      )}
    </div>
  );
}
