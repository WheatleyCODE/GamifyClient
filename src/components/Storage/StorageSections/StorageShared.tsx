import React, { useEffect } from 'react';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { AccessType } from '../../../types/storage';
import { StorageItem } from '../StorageItem/StorageItem';

export const StorageShared = () => {
  const { items, target, loading } = useTypedSelector((state) => state.storage);
  const { setParentsAC } = useActions();

  useEffect(() => {
    setParentsAC([]);
  }, []);

  const newItems = items.filter((item) => item.accessType === AccessType.PUBLICK);

  if (loading) return <div className="storage-shared" />;

  return (
    <div data-context="true" className="storage-shared">
      {newItems.map((item) => (
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
