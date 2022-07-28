import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { StorageItem } from '../StorageItem/StorageItem';

export const StorageDrive = () => {
  const { items, target } = useTypedSelector((state) => state.storage);

  return (
    <div className="storage-drive">
      {items.map((item) => (
        <StorageItem
          active={target?._id === item._id}
          id={item._id}
          key={item._id}
          type={item.type}
          name={item.name}
        />
      ))}
    </div>
  );
};
