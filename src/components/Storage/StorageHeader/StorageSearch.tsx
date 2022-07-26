import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Input } from '../../UI/Input';

export const StorageSearch = () => {
  return (
    <div className="storage-search">
      <Input Icon={BiSearch} placeholder="Поиск" />
    </div>
  );
};
