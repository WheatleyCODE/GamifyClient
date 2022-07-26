import React from 'react';
import { AiOutlineCloud } from 'react-icons/ai';
import { Button } from '../../UI/Button';

export const StorageSize = () => {
  return (
    <div className="storage-size">
      <div className="storage-size__info">
        <AiOutlineCloud className="icon" />
        Хранилище (заполнено на 10%)
      </div>
      <div className="storage-size__progress-bar">
        <div className="storage-size__value" />
      </div>
      <div className="storage-size__size-info">10 ГБ из 100 ГБ</div>
      <Button type="outline" color="orange" text="Увеличить" />
    </div>
  );
};
