import { ValidInputOpts } from '../hooks/useValidInput';

export const getAuthHandlers = (
  login: (email: string, password: string) => void,
  registration: (nick: string, email: string, password: string) => void,
  emailInput: ValidInputOpts,
  passwordInput: ValidInputOpts,
  nickNameInput: ValidInputOpts,
  passError: null | string,
) => {
  return {
    login: () => {
      if (emailInput.isError || passwordInput.isError) return;
      if (!emailInput.value || !passwordInput.value) return;

      login(emailInput.value, passwordInput.value);
    },

    register: () => {
      if (emailInput.isError || passwordInput.isError) return;
      if (nickNameInput.isError || passError) return;
      if (!nickNameInput.value || !emailInput.value) return;
      if (!passwordInput.value) return;

      registration(nickNameInput.value, emailInput.value, passwordInput.value);
    },
  };
};
