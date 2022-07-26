import React from 'react';
import { Outlet } from 'react-router';
import { StorageAside } from '../components/Storage/StorageAside/StorageAside';
import { StorageHeader } from '../components/Storage/StorageHeader/StorageHeader';
import { StorageLast } from '../components/Storage/StorageLast/StorageLast';

const StoragePage = () => {
  return (
    <div className="storage-page">
      <StorageHeader />
      <StorageLast />
      <StorageAside />
      <Outlet />
    </div>
  );
};

export default StoragePage;
