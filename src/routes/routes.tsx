import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { PathRoutes } from '../types/routes';

export const routes = [
  {
    path: PathRoutes.HOME,
    Page: HomePage,
  },
  {
    path: PathRoutes.LOGIN,
    Page: LoginPage,
  },
  {
    path: PathRoutes.REGISTER,
    Page: RegisterPage,
  },
];
