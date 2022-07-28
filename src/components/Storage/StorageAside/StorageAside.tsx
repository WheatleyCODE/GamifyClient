import React, { FC } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Button } from '../../UI/Button';
import { StorageAsideMenu } from './StorageAsideMenu';
import { StorageSize } from './StorageSize';

export const StorageAside: FC = () => {
  const { diskSpace, usedSpace } = useTypedSelector((state) => state.storage);
  return (
    <div className="storage-aside">
      <div className="storage-aside__create">
        <Button Icon={BsPlusLg} type="outline" radius="rounded" text="Создать" />
      </div>
      <StorageAsideMenu />
      <StorageSize diskSpace={diskSpace} usedSpace={usedSpace} />
    </div>
  );
};
