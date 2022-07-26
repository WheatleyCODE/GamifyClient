import React, { FC } from 'react';
import { StorageAside } from './StorageAside/StorageAside';
import { StorageHeader } from './StorageHeader/StorageHeader';
import { StorageLast } from './StorageLast/StorageLast';
import { StorageMain } from './StorageMain';

export const StorageLayout: FC = () => {
  return (
    <div className="storage-layout">
      <StorageHeader />
      <StorageLast />
      <StorageAside />
      <StorageMain />
    </div>
  );
};
