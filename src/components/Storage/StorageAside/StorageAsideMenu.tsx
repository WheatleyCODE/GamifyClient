import React, { FC } from 'react';
import { storageMenu } from '../../../consts/storageMenu';
import { StorageAsideMenuItem } from './StorageAsideMenuItem';

export const StorageAsideMenu: FC = () => {
  return (
    <div className="storage-aside-menu">
      {storageMenu.map(({ Icon, text, path }) => (
        <StorageAsideMenuItem key={text} Icon={Icon} text={text} path={path} />
      ))}
      {/* <StorageAsideMenuItem Icon={FiHardDrive} text="Мой диск" />
      <StorageAsideMenuItem Icon={AiOutlineUsergroupAdd} text="С общим доступом" />
      <StorageAsideMenuItem Icon={BiTimeFive} text="Недавние" />
      <StorageAsideMenuItem Icon={AiOutlineStar} text="Помеченные" />
      <StorageAsideMenuItem Icon={BiTrash} text="Корзина" /> */}
    </div>
  );
};
