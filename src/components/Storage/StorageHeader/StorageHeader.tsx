import React from 'react';
import { StorageLogo } from './StorageLogo';
import { StorageSearch } from './StorageSearch';

export const StorageHeader = () => {
  return (
    <div className="storage-header">
      <div className="storage-header__aside">
        <StorageLogo />
      </div>
      <div className="storage-header__main">
        <StorageSearch />
      </div>
    </div>
  );
};
