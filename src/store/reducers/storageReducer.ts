import { StorageAction, StorageState, StorageActionTypes } from '../../types/storage';

const initialState: StorageState = {
  items: [],
  showCreateFolder: false,
  showAccessModal: false,
  showLinkModal: false,
  showRenameModal: false,
  filter: {
    name: false,
    owner: false,
    date: false,
    size: false,
  },
  parentsList: [],
  target: null,
  diskSpace: 0,
  usedSpace: 0,
  loading: false,
  error: null,
};

export const storageReducer = (state = initialState, action: StorageAction): StorageState => {
  switch (action.type) {
    case StorageActionTypes.SET_STORAGE_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case StorageActionTypes.SET_PARENTS_LIST: {
      return {
        ...state,
        parentsList: [...action.payload],
      };
    }

    case StorageActionTypes.SET_SHOW_FOLDER: {
      return {
        ...state,
        showCreateFolder: action.payload,
      };
    }

    case StorageActionTypes.SET_SHOW_ACCESS_MODAL: {
      return {
        ...state,
        showAccessModal: action.payload,
      };
    }

    case StorageActionTypes.SET_SHOW_LINK_MODAL: {
      return {
        ...state,
        showLinkModal: action.payload,
      };
    }

    case StorageActionTypes.SET_SHOW_RENAME_MODAL: {
      return {
        ...state,
        showRenameModal: action.payload,
      };
    }

    case StorageActionTypes.SET_STORAGE_FILTERS: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case StorageActionTypes.CREATE_FOLDER: {
      const newItems = [...state.items];
      newItems.push(action.payload);

      return {
        ...state,
        items: newItems,
      };
    }

    case StorageActionTypes.SET_ITEMS: {
      return {
        ...state,
        items: [...action.payload],
      };
    }

    case StorageActionTypes.SET_CURRENT: {
      const newTarget = state.items.find((item) => item._id === action.payload);
      if (!newTarget) return { ...state };

      return {
        ...state,
        target: { ...newTarget },
      };
    }

    case StorageActionTypes.SET_STORAGE: {
      const { usedSpace, diskSpace, items } = action.payload;
      return {
        ...state,
        items: [...items],
        usedSpace,
        diskSpace,
      };
    }

    case StorageActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
