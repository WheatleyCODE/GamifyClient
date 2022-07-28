import React, { FC, memo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Input } from '../../UI/Input';

export const StorageSearch: FC = memo(() => {
  return (
    <div className="storage-search">
      <Input Icon={BiSearch} placeholder="Поиск" />
    </div>
  );
});
