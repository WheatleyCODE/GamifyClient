import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { StorageItem } from '../StorageItem/StorageItem';

export const StorageFolder = () => {
  const { fetchChildrensReq, fetchParentsListReq } = useActions();
  const { items, target, loading } = useTypedSelector((state) => state.storage);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetchChildrensReq(params.id);
      fetchParentsListReq(params.id);
    }
  }, [params.id]);

  if (loading) return <div className="storage-folder" />;

  return (
    <div data-context="true" className="storage-folder">
      {items.map((item) => (
        <StorageItem
          accessType={item.accesType}
          creationDate={item.creationDate}
          key={item._id}
          active={target?._id === item._id}
          id={item._id}
          type={item.type}
          name={item.name}
        />
      ))}
    </div>
  );
};
