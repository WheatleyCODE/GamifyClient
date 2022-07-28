import React, { FC, memo } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { BiChevronRight, BiCog } from 'react-icons/bi';
import { GiOpenFolder, GiChest } from 'react-icons/gi';
import { Button } from '../../UI/Button';

export const StoragePath: FC = memo(() => {
  const MemoIcon = memo(BiChevronRight);

  return (
    <div className="storage-path">
      <div className="storage-path__items">
        <div className="storage-path__item">
          <GiChest className="icon" />
          Хранилище
        </div>
        <MemoIcon className="icon" />
        <div className="storage-path__item">
          <GiOpenFolder className="icon" />
          Новая папка
        </div>
        <MemoIcon className="icon" />
        <div className="storage-path__item">
          <GiOpenFolder className="icon" />
          Старая папка
        </div>
      </div>

      <div className="storage-path__items">
        <Button Icon={AiOutlineTable} text="Отображение" type="outline" />
        <Button Icon={BiCog} text="Настройки" type="outline" />
      </div>
    </div>
  );
});
