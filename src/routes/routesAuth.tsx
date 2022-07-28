import { lazy } from 'react';
import { StorageDrive } from '../components/Storage/StorageSections/StorageDrive';
import { StorageFolder } from '../components/Storage/StorageSections/StorageFolder';
import { StorageRecent } from '../components/Storage/StorageSections/StorageRecent';
import { StorageShared } from '../components/Storage/StorageSections/StorageShared';
import { StorageStarred } from '../components/Storage/StorageSections/StorageStarred';
import { StorageTrash } from '../components/Storage/StorageSections/StorageTrash';
import { ActivatePage } from '../pages/ActivatePage';
import { ChangePasswordPage } from '../pages/ChangePasswordPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage';
import { PathRoutes } from '../types/routes';

const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const StoragePage = lazy(() => import('../pages/StoragePage'));
const SocialPage = lazy(() => import('../pages/SocialPage'));

export const routesAuth = [
  {
    path: PathRoutes.HOME,
    Page: HomePage,
    childrens: [],
  },
  {
    path: PathRoutes.LOGIN,
    Page: LoginPage,
    childrens: [],
  },
  {
    path: PathRoutes.REGISTER,
    Page: RegisterPage,
    childrens: [],
  },
  {
    path: PathRoutes.RESET_PASSWORD,
    Page: ResetPasswordPage,
    childrens: [],
  },
  {
    path: PathRoutes.CHANGE_PASSWORD,
    Page: ChangePasswordPage,
    childrens: [],
  },
  {
    path: PathRoutes.ACTIVATE,
    Page: ActivatePage,
    childrens: [],
  },
  {
    path: PathRoutes.DASHBOARD,
    Page: DashboardPage,
    childrens: [],
  },
  {
    path: PathRoutes.STORAGE,
    Page: StoragePage,
    childrens: [
      {
        path: PathRoutes.STORAGE_MY_DRIVE,
        Component: StorageDrive,
      },
      {
        path: PathRoutes.STORAGE_SHARED,
        Component: StorageShared,
      },
      {
        path: PathRoutes.STORAGE_RECENT,
        Component: StorageRecent,
      },
      {
        path: PathRoutes.STORAGE_STARRED,
        Component: StorageStarred,
      },
      {
        path: PathRoutes.STORAGE_TRASH,
        Component: StorageTrash,
      },
      {
        path: PathRoutes.STORAGE_FOLDER,
        Component: StorageFolder,
      },
    ],
  },
  {
    path: PathRoutes.SOCIAL,
    Page: SocialPage,
    childrens: [],
  },
];
