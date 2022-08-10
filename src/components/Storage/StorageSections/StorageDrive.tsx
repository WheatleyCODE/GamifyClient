import React, { useEffect } from 'react';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { StorageItem } from '../StorageItem/StorageItem';

export const StorageDrive = () => {
  const { items, target, loading } = useTypedSelector((state) => state.storage);
  const { setParentsAC } = useActions();

  useEffect(() => {
    setParentsAC([]);
  }, []);

  if (loading) return <div className="storage-drive" />;

  return (
    <div data-context="true" className="storage-drive">
      {items.map((item) => (
        <StorageItem
          accessType={item.accessType}
          creationDate={item.creationDate}
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
