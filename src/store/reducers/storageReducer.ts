import { StorageAction, StorageState, StorageActionTypes } from '../../types/storage';

const initialState: StorageState = {
  items: [],
  target: null,
  diskSpace: 0,
  usedSpace: 0,
  loading: false,
  error: null,
};

export const storageReducer = (state = initialState, action: StorageAction): StorageState => {
  switch (action.type) {
    case StorageActionTypes.SET_STORAGE_LOADING: {
      return { ...state, loading: action.payload };
    }

    case StorageActionTypes.SET_ITEMS: {
      return { ...state, loading: false, items: [...action.payload] };
    }

    case StorageActionTypes.SET_CURRENT: {
      const newTarget = state.items.find((item) => item._id === action.payload);
      if (!newTarget) return { ...state };

      return { ...state, target: { ...newTarget } };
    }

    case StorageActionTypes.SET_STORAGE: {
      const { usedSpace, diskSpace, items } = action.payload;
      return {
        ...state,
        loading: false,
        items: [...items],
        usedSpace,
        diskSpace,
      };
    }

    case StorageActionTypes.SET_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
