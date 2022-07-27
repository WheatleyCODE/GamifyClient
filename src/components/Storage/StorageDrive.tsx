import React from 'react';
import { ItemTypes } from '../../types/storage';
import { StorageItem } from './StorageItem/StorageItem';

export const StorageDrive = () => {
  return (
    <div className="storage-drive">
      <StorageItem type={ItemTypes.FOLDER} name="Новая папка" />
      <StorageItem type={ItemTypes.ALBUM} name="Новый альбом" />
      <StorageItem type={ItemTypes.FILE} name="Новый файл" />
      <StorageItem type={ItemTypes.IMAGE} name="Новая картинка" />
      <StorageItem type={ItemTypes.NOTE} name="Новая заметка" />
      <StorageItem type={ItemTypes.TRACK} name="Новый трек" />
      <StorageItem type={ItemTypes.VIDEO} name="Новое видео" />
    </div>
  );
};
