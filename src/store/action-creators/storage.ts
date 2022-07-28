import { Dispatch } from 'redux';
import { StorageService } from '../../services/StorageService';
import { StorageAction, StorageActionTypes } from '../../types/storage';

export const fetchItems = (storageId: string) => {
  return async (dispatch: Dispatch<StorageAction>) => {
    try {
      const res = await StorageService.fetchItems(storageId);
      const { usedSpace, diskSpace, tracks, albums, folders } = res.data;

      dispatch({
        type: StorageActionTypes.SET_STORAGE,
        payload: {
          usedSpace,
          diskSpace,
          items: [...folders, ...albums, ...tracks],
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const setCurrentItem = (id: string): StorageAction => ({
  type: StorageActionTypes.SET_CURRENT,
  payload: id,
});
