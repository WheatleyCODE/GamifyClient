import { Dispatch } from 'redux';
import { StorageService } from '../../services/StorageService';
import { FolderService } from '../../services/FolderService';
import {
  Album,
  Childrens,
  Folder,
  StorageAction,
  StorageActionTypes,
  StorageFilter,
  Track,
} from '../../types/storage';

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

export const setShowCreateFolderAC = (payload: boolean): StorageAction => ({
  type: StorageActionTypes.SET_SHOW_FOLDER,
  payload,
});

export const setShowAccessModalAC = (payload: boolean): StorageAction => ({
  type: StorageActionTypes.SET_SHOW_ACCESS_MODAL,
  payload,
});

export const setShowLinkModalAC = (payload: boolean): StorageAction => ({
  type: StorageActionTypes.SET_SHOW_LINK_MODAL,
  payload,
});

export const setShowRenameModalAC = (payload: boolean): StorageAction => ({
  type: StorageActionTypes.SET_SHOW_RENAME_MODAL,
  payload,
});

export const setShowDeleteModalAC = (payload: boolean): StorageAction => ({
  type: StorageActionTypes.SET_SHOW_DELETE_MODAL,
  payload,
});

export const deleteItemAC = (itemId: string): StorageAction => ({
  type: StorageActionTypes.DELETE_ITEM,
  payload: itemId,
});

export const createFolderAC = (payload: Folder): StorageAction => ({
  type: StorageActionTypes.CREATE_FOLDER,
  payload,
});

export const setParentsAC = (payload: Folder[]): StorageAction => ({
  type: StorageActionTypes.SET_PARENTS_LIST,
  payload,
});

export const setStorageFiltersAC = (payload: StorageFilter): StorageAction => ({
  type: StorageActionTypes.SET_STORAGE_FILTERS,
  payload,
});

export const replaceItemAC = (id: string, item: Folder | Album | Track): StorageAction => ({
  type: StorageActionTypes.REPLACE_ITEM,
  payload: {
    id,
    item,
  },
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

export const fetchChildrensReq = (parentId: string) => {
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

export const createFolderReq = (storageId: string, name: string, parentId?: string) => {
  return async (dispatch: Dispatch<StorageAction>) => {
    try {
      const res = await FolderService.createFolder(storageId, name, parentId);
      dispatch(createFolderAC(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteItemReq = (itemId: string) => {
  return async (dispatch: Dispatch<StorageAction>) => {
    try {
      const res = await StorageService.deleteItem(itemId);
      dispatch(deleteItemAC(itemId));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchParentsListReq = (childId: string) => {
  return async (dispatch: Dispatch<StorageAction>) => {
    try {
      const res = await StorageService.fetchParents(childId);
      dispatch(setParentsAC(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};
