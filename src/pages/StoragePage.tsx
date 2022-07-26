import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { StorageLayout } from '../components/Storage/StorageLayout';

const StorageDrive = () => {
  return (
    <Layout>
      <div className="storage-page">
        <StorageLayout />
      </div>
    </Layout>
  );
};

export default StorageDrive;
