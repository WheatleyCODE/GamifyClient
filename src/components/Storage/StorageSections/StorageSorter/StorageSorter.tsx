import React, { FC, useCallback } from 'react';
import { useActions } from '../../../../hooks/useAction';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { StorageSorterItem } from './StorageSorterItem';

export const StorageSorter: FC = () => {
  const { filter } = useTypedSelector((state) => state.storage);
  const { setStorageFiltersAC } = useActions();

  const defaultFilters = {
    name: false,
    owner: false,
    date: false,
    size: false,
  };

  const changeFilterName = useCallback(() => {
    defaultFilters.name = !filter.name;
    setStorageFiltersAC(defaultFilters);
  }, [filter.name]);

  const changeFilterOwner = useCallback(() => {
    defaultFilters.owner = !filter.owner;
    setStorageFiltersAC(defaultFilters);
  }, [filter.owner]);

  const changeFilterDate = useCallback(() => {
    defaultFilters.date = !filter.date;
    setStorageFiltersAC(defaultFilters);
  }, [filter.date]);

  const changeFilterSize = useCallback(() => {
    defaultFilters.size = !filter.size;
    setStorageFiltersAC(defaultFilters);
  }, [filter.size]);

  return (
    <div className="storage-sorter">
      <StorageSorterItem toggle={filter.name} text="Название" onClick={changeFilterName} />
      <StorageSorterItem toggle={filter.owner} text="Доступ" onClick={changeFilterOwner} />
      <StorageSorterItem toggle={filter.date} text="Дата" onClick={changeFilterDate} />
      <StorageSorterItem toggle={filter.name} text="Размер" onClick={changeFilterSize} />
    </div>
  );
};
