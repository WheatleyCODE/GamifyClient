import { AccessType } from '../types/storage';

export const accessTypeNames = {
  [AccessType.PRIVATE]: 'Только я',
  [AccessType.PUBLICK]: 'Доступно всем',
  [AccessType.ACCESS_LINK]: 'Доступ по ссылке',
};
