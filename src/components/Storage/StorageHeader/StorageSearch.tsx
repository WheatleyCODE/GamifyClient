import React, { FC, memo } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Button } from '../../UI/Button';

export const StorageSearch: FC = memo(() => {
  return (
    <div className="storage-search">
      <div className="storage-search__input">
        <div className="storage-search__icon">
          <BiSearch />
        </div>
        <input placeholder="Поиск на диске" className="storage-search__textfild" type="text" />
      </div>
      <Button Icon={AiOutlineTable} text="Кот" type="outline" />
    </div>
  );
});
