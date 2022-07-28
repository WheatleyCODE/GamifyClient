import React, { FC, memo } from 'react';
import { AiOutlineCloud } from 'react-icons/ai';
import { getPercent } from '../../../utils/getPercent';
import { getProgressColor } from '../../../utils/getProgressColor';
import { sizeFormat } from '../../../utils/sizeFormat';
import { Button } from '../../UI/Button';

export type StorageSizeProps = {
  diskSpace: number;
  usedSpace: number;
};

export const StorageSize: FC<StorageSizeProps> = memo(({ diskSpace, usedSpace }) => {
  const percent = getPercent(diskSpace, usedSpace);
  const color = getProgressColor(percent);
  const MemoIcon = memo(AiOutlineCloud);

  return (
    <div className="storage-size">
      <div className="storage-size__info">
        <MemoIcon className="icon" />
        Хранилище (заполнено на {`${percent}%`})
      </div>
      <div className="storage-size__progress-bar">
        <div style={{ width: `${percent}%`, backgroundColor: color }} className="storage-size__value" />
      </div>
      <div className="storage-size__size-info">
        {sizeFormat(usedSpace)} из {sizeFormat(diskSpace)}
      </div>
      <Button type="outline" color="orange" text="Увеличить" />
    </div>
  );
});
