import React, { FC } from 'react';
import { FiHardDrive } from 'react-icons/fi';
import { AiOutlineStar, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiTimeFive, BiTrash } from 'react-icons/bi';
import { StorageAsideMenuItem } from './StorageAsideMenuItem';

export const StorageAsideMenu: FC = () => {
  return (
    <div className="storage-aside-menu">
      <StorageAsideMenuItem active Icon={FiHardDrive} text="Мой диск" />
      <StorageAsideMenuItem Icon={AiOutlineUsergroupAdd} text="С общим доступом" />
      <StorageAsideMenuItem Icon={BiTimeFive} text="Недавние" />
      <StorageAsideMenuItem Icon={AiOutlineStar} text="Помеченные" />
      <StorageAsideMenuItem Icon={BiTrash} text="Корзина" />
    </div>
  );
};
