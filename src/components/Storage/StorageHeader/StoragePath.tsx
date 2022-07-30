import React, { FC, memo } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { BiChevronRight, BiCog } from 'react-icons/bi';
import { GiOpenFolder, GiChest } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { PathRoutes } from '../../../types/routes';
import { Folder } from '../../../types/storage';
import { clearParam } from '../../../utils/clearParam';
import { Button } from '../../UI/Button';

export type StoragePathProps = {
  parentsList: Folder[];
};

export const StoragePath: FC<StoragePathProps> = memo(({ parentsList }) => {
  const MemoIcon = memo(BiChevronRight);

  return (
    <div className="storage-path">
      <div className="storage-path__items">
        <Link className="storage-path__link" to={PathRoutes.STORAGE_MY_DRIVE}>
          <div className="storage-path__item">
            <GiChest className="icon" />
            Хранилище
          </div>
        </Link>

        {parentsList.map((parent) => (
          <Link
            key={parent._id}
            className="storage-path__link"
            to={`${clearParam(PathRoutes.STORAGE_FOLDER)}/${parent._id}`}
          >
            <MemoIcon className="icon" />

            <div className="storage-path__item">
              <GiOpenFolder className="icon" />
              {parent.name}
            </div>
          </Link>
        ))}
      </div>

      <div className="storage-path__items">
        <Button Icon={AiOutlineTable} text="Отображение" type="outline" />
        <Button Icon={BiCog} text="Настройки" type="outline" />
      </div>
    </div>
  );
});
