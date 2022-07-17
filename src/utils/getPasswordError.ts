export const getPassError = (
  isEqual: boolean,
  isTouchOne: boolean,
  isTouchTwo: boolean,
) => {
  if (!isEqual && isTouchOne && isTouchTwo) {
    return 'Пароли не совпадают';
  }

  return null;
};
