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
      if (!emailInput.isError && !passwordInput.isError) {
        login(emailInput.value, passwordInput.value);
      }
    },

    register: () => {
      if (
        !emailInput.isError &&
        !passwordInput.isError &&
        !nickNameInput.isError &&
        !passError
      ) {
        registration(
          nickNameInput.value,
          emailInput.value,
          passwordInput.value,
        );
      }
    },
  };
};
