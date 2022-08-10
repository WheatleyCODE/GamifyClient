import { AccessType } from '../types/storage';
import { accessTypeNames } from './accessTypeNames';

export type SelectItem = {
  text: string;
  value: AccessType;
};

export const selectItems: SelectItem[] = [
  {
    text: accessTypeNames[AccessType.PRIVATE],
    value: AccessType.PRIVATE,
  },
  {
    text: accessTypeNames[AccessType.PUBLICK],
    value: AccessType.PUBLICK,
  },
  {
    text: accessTypeNames[AccessType.ACCESS_LINK],
    value: AccessType.ACCESS_LINK,
  },
];
