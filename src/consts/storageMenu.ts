import { AiOutlineStar, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiTimeFive, BiTrash } from 'react-icons/bi';
import { FiHardDrive } from 'react-icons/fi';
import { PathRoutes } from '../types/routes';

export const storageMenu = [
  {
    text: 'Мой диск',
    path: PathRoutes.STORAGE_MY_DRIVE,
    Icon: FiHardDrive,
  },
  {
    text: 'Общий доступ',
    path: PathRoutes.STORAGE_SHARED,
    Icon: AiOutlineUsergroupAdd,
  },
  {
    text: 'Недвание',
    path: PathRoutes.STORAGE_RECENT,
    Icon: BiTimeFive,
  },
  {
    text: 'Помеченные',
    path: PathRoutes.STORAGE_STARRED,
    Icon: AiOutlineStar,
  },
  {
    text: 'Корзина',
    path: PathRoutes.STORAGE_TRASH,
    Icon: BiTrash,
  },
];
