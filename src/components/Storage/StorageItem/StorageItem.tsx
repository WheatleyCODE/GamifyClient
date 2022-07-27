import React, { FC } from 'react';
import { storageIcons } from '../../../consts/storageIcons';
import { ItemTypes } from '../../../types/storage';

export type StorageItemProps = {
  type: ItemTypes;
  name: string;
};

export const StorageItem: FC<StorageItemProps> = ({ type, name }) => {
  const Icon = storageIcons[type];

  return (
    <div className="storage-item">
      <div className="storage-item__name">
        <Icon className="icon" />
        {name}
      </div>
      <div className="storage-item__owner">Я</div>
      <div className="storage-item__date">24.05.22</div>
      <div className="storage-item__size">5МБ</div>
    </div>
  );
};
