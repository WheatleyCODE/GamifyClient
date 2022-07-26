import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { Button } from '../../UI/Button';
import { StorageAsideMenu } from './StorageAsideMenu';
import { StorageSize } from './StorageSize';

export const StorageAside = () => {
  return (
    <div className="storage-aside">
      <div className="storage-aside__create">
        <Button Icon={BsPlusLg} type="outline" radius="rounded" text="Создать" />
      </div>
      <StorageAsideMenu />
      <StorageSize />
    </div>
  );
};
