import React, { FC, memo } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { StorageLogo } from './StorageLogo';
import { StoragePath } from './StoragePath';
import { StorageSearch } from './StorageSearch';

export const StorageHeader: FC = memo(() => {
  const { parentsList } = useTypedSelector((state) => state.storage);
  return (
    <div className="storage-header">
      <div className="storage-header__aside">
        <StorageLogo />
      </div>
      <div className="storage-header__main">
        <StorageSearch />
        <StoragePath parentsList={parentsList} />
      </div>
    </div>
  );
});
