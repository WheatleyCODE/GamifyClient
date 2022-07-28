import React, { FC, memo, useCallback } from 'react';
import { storageIcons } from '../../../consts/storageIcons';
import { useActions } from '../../../hooks/useAction';
import { ItemTypes } from '../../../types/storage';

export type StorageItemProps = {
  type: ItemTypes;
  name: string;
  id: string;
  active: boolean;
};

export const StorageItem: FC<StorageItemProps> = memo(({ type, name, id, active }) => {
  const MemoIcon = memo(storageIcons[type]);
  const { setCurrentItem } = useActions();

  const setTarget = useCallback(() => {
    setCurrentItem(id);
  }, [id]);

  return (
    <div aria-hidden onClick={setTarget} className={`storage-item ${active && 'active'}`}>
      <div className="storage-item__name">
        <MemoIcon className="icon" />
        {name}
      </div>
      <div className="storage-item__owner">Я</div>
      <div className="storage-item__date">24.05.22</div>
      <div className="storage-item__size">5МБ</div>
    </div>
  );
});
