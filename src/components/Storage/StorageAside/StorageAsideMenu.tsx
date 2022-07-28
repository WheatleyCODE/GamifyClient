import React, { FC, memo } from 'react';
import { storageMenu } from '../../../consts/storageMenu';
import { StorageAsideMenuItem } from './StorageAsideMenuItem';

export const StorageAsideMenu: FC = memo(() => {
  return (
    <div className="storage-aside-menu">
      {storageMenu.map(({ Icon, text, path }) => (
        <StorageAsideMenuItem key={text} Icon={Icon} text={text} path={path} />
      ))}
    </div>
  );
});
