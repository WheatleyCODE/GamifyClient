import React, { FC, useCallback } from 'react';
import { useActions } from '../../../../hooks/useAction';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { StorageSorterItem } from './StorageSorterItem';

export const StorageSorter: FC = () => {
  const { filter } = useTypedSelector((state) => state.storage);
  const { setStorageFiltersAC } = useActions();

  const changeFilterName = useCallback(() => {
    setStorageFiltersAC({
      name: !filter.name,
      owner: false,
      date: false,
      size: false,
    });
  }, [filter.name]);

  const changeFilterOwner = useCallback(() => {
    setStorageFiltersAC({
      name: false,
      owner: !filter.owner,
      date: false,
      size: false,
    });
  }, [filter.owner]);

  const changeFilterDate = useCallback(() => {
    setStorageFiltersAC({
      name: false,
      owner: false,
      date: !filter.date,
      size: false,
    });
  }, [filter.date]);

  const changeFilterSize = useCallback(() => {
    setStorageFiltersAC({
      name: false,
      owner: false,
      date: false,
      size: !filter.size,
    });
  }, [filter.size]);

  return (
    <div className="storage-sorter">
      <StorageSorterItem toggle={filter.name} text="Название" onClick={changeFilterName} />
      <StorageSorterItem toggle={filter.owner} text="Доступ" onClick={changeFilterOwner} />
      <StorageSorterItem toggle={filter.date} text="Дата" onClick={changeFilterDate} />
      <StorageSorterItem toggle={filter.size} text="Размер" onClick={changeFilterSize} />
    </div>
  );
};
