import { ActivatePage } from '../pages/ActivatePage';
import { ChangePasswordPage } from '../pages/ChangePasswordPage';
import { DashboardPage } from '../pages/DashboardPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage';
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
  {
    path: PathRoutes.RESET_PASSWORD,
    Page: ResetPasswordPage,
  },
  {
    path: PathRoutes.CHANGE_PASSWORD,
    Page: ChangePasswordPage,
  },
  {
    path: PathRoutes.ACTIVATE,
    Page: ActivatePage,
  },
];

export const routesAuth = [
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
  {
    path: PathRoutes.RESET_PASSWORD,
    Page: ResetPasswordPage,
  },
  {
    path: PathRoutes.CHANGE_PASSWORD,
    Page: ChangePasswordPage,
  },
  {
    path: PathRoutes.ACTIVATE,
    Page: ActivatePage,
  },
  {
    path: PathRoutes.DASHBOARD,
    Page: DashboardPage,
  },
];
