import React, { FC, memo } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { Button } from '../../UI/Button';
import { StorageLogo } from './StorageLogo';
import { StorageSearch } from './StorageSearch';

export const StorageHeader: FC = memo(() => {
  return (
    <div className="storage-header">
      <div className="storage-header__aside">
        <StorageLogo />
      </div>
      <div className="storage-header__main">
        <StorageSearch />
        <Button Icon={AiOutlineTable} type="outline" text="Отображение" />
      </div>
    </div>
  );
});
