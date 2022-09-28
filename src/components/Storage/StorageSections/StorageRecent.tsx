import React, { useEffect } from 'react';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { StorageItem } from '../StorageItem/StorageItem';

export const StorageRecent = () => {
  const { items, target, loading } = useTypedSelector((state) => state.storage);
  const { setParentsAC } = useActions();

  useEffect(() => {
    setParentsAC([]);
  }, []);

  const newItems = items.filter((item) => new Date().getDate() - 1 < new Date(item.openDate).getDate());

  if (loading) return <div className="storage-recent" />;

  return (
    <div data-context="true" className="storage-recent">
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
