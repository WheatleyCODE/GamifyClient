export const emailValidator = (str: string) => {
  let validError: string | null = null;

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(str).toLowerCase())) {
    validError = 'Не корректный Email';
  }

  if (str.length < 1) {
    validError = 'Поле не может быть пустым';
  }

  return validError;
};

export const passwordValidator = (str: string) => {
  let validError: string | null = null;

  if (str.length < 8) {
    validError = 'Пароль должен быть длинее 8 символов';
  }

  if (str.length < 1) {
    validError = 'Поле не может быть пустым';
  }

  return validError;
};

export const lengthValidator = (str: string) => {
  let validError: string | null = null;

  if (str.length < 5) {
    validError = 'Имя должно быть длинее 5 символов';
  }

  if (str.length < 1) {
    validError = 'Поле не может быть пустым';
  }

  return validError;
};

// TODO Сделать генератор валидаторов

// export const getValidator = () => {
//   return (str: string) => {
//     let validError: string | null = null;

//     if (str.length < 8) {
//       validError = 'Пароль должен быть длинее 8 символов';
//     }

//     if (str.length < 1) {
//       validError = 'Поле не может быть пустым';
//     }

//     return validError;
//   };
// }
