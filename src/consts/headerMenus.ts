import { PathRoutes } from '../types/routes';

export const headerMenu = [
  {
    text: 'Главная',
    path: PathRoutes.HOME,
  },
  {
    text: 'Вход',
    path: PathRoutes.LOGIN,
  },
  {
    text: 'Регистрация',
    path: PathRoutes.REGISTER,
  },
];

export const headerMenuAuth = [
  {
    text: 'Задачи',
    path: PathRoutes.DASHBOARD,
  },
  {
    text: 'Хранилище',
    path: PathRoutes.STORAGE_MY_DRIVE,
  },
  {
    text: 'Cоцсеть',
    path: PathRoutes.SOCIAL,
  },
];
