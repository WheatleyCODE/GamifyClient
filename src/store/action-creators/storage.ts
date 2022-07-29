import { Dispatch } from 'redux';
import { StorageService } from '../../services/StorageService';
import { Childrens, StorageAction, StorageActionTypes } from '../../types/storage';

export const setCurrentItemAC = (payload: string): StorageAction => ({
  type: StorageActionTypes.SET_CURRENT,
  payload,
});

export const setStorageAC = (usedSpace: number, diskSpace: number, items: Childrens): StorageAction => ({
  type: StorageActionTypes.SET_STORAGE,
  payload: {
    usedSpace,
    diskSpace,
    items,
  },
});

export const setStorageLoadingAC = (payload: boolean): StorageAction => ({
  type: StorageActionTypes.SET_STORAGE_LOADING,
  payload,
});

export const setStorageItemsAC = (payload: Childrens): StorageAction => ({
  type: StorageActionTypes.SET_ITEMS,
  payload,
});

export const fetchItemsReq = (storageId: string) => {
  return async (dispatch: Dispatch<StorageAction>) => {
    try {
      dispatch(setStorageLoadingAC(true));
      const res = await StorageService.fetchItems(storageId);
      const { usedSpace, diskSpace, tracks, albums, folders } = res.data;

      dispatch(setStorageAC(usedSpace, diskSpace, [...folders, ...albums, ...tracks]));
      dispatch(setStorageLoadingAC(false));
    } catch (e) {
      dispatch(setStorageLoadingAC(false));
      console.log(e);
    }
  };
};

export const fetchChildrens = (parentId: string) => {
  return async (dispatch: Dispatch<StorageAction>) => {
    try {
      dispatch(setStorageLoadingAC(true));
      const res = await StorageService.fetchChildrens(parentId);

      dispatch(setStorageItemsAC([...res.data]));
      dispatch(setStorageLoadingAC(false));
    } catch (e) {
      dispatch(setStorageLoadingAC(false));
      console.log(e);
    }
  };
};
