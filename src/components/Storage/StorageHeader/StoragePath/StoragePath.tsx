import React, { FC, memo } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { BiCog } from 'react-icons/bi';
import { GiChest } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { PathRoutes } from '../../../../types/routes';
import { Folder } from '../../../../types/storage';
import { Button } from '../../../UI/Button';
import { StoragePathItem } from './StoragePathItem';

export type StoragePathProps = {
  parentsList: Folder[];
};

export const StoragePath: FC<StoragePathProps> = memo(({ parentsList }) => {
  const MemoIcon = memo(GiChest);

  return (
    <div className="storage-path">
      <div className="storage-path__items">
        <Link className="storage-path__link" to={PathRoutes.STORAGE_MY_DRIVE}>
          <div className="storage-path__item">
            <MemoIcon className="icon" />
            Хранилище
          </div>
        </Link>

        {parentsList.map((parent) => (
          <StoragePathItem key={parent._id} id={parent._id} name={parent.name} />
        ))}
      </div>

      <div className="storage-path__items">
        <Button Icon={AiOutlineTable} text="Отображение" type="outline" />
        <Button Icon={BiCog} text="Настройки" type="outline" />
      </div>
    </div>
  );
});
