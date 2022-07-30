export enum ItemTypes {
  ALBUM = 'album',
  FILE = 'file',
  FOLDER = 'folder',
  IMAGE = 'image',
  NOTE = 'note',
  TRACK = 'track',
  VIDEO = 'video',
}

export type Childrens = (Folder | Album | Track)[];

export interface StorageResponse {
  _id: string;
  user: string;
  diskSpace: number;
  usedSpace: number;
  folders: Folder[];
  tracks: Track[];
  albums: Album[];
}

export interface Album {
  _id: string;
  type: ItemTypes;
  user: string;
  name: string;
  author: string;
  image: string;
  tracks: Track[];
  comments: any[];
}

export interface Folder {
  _id: string;
  type: ItemTypes;
  user: string;
  name: string;
}

export interface Track {
  _id: string;
  type: ItemTypes;
  user: string;
  name: string;
  author: string;
  listen: number;
  text: string;
  image: string;
  audio: string;
  comments: any[];
}

export interface StorageFilter {
  name: boolean;
  owner: boolean;
  date: boolean;
  size: boolean;
}

export interface StorageState {
  items: (Track | Album | Folder)[];
  target: Track | Album | Folder | null;
  showCreateFolder: boolean;
  filter: StorageFilter;
  parentsList: Folder[];
  diskSpace: number;
  usedSpace: number;
  loading: boolean;
  error: null | string;
}

export enum StorageActionTypes {
  SET_STORAGE_LOADING = 'SET_STORAGE_LOADING',
  SET_ITEMS = 'SET_ITEMS',
  SET_ERROR = 'SET_ERROR',
  SET_STORAGE = 'SET_STORAGE',
  SET_CURRENT = 'SET_CURRENT',
  SET_SHOW_FOLDER = 'SET_SHOW_FOLDER',
  CREATE_FOLDER = 'CREATE_FOLDER',
  SET_PARENTS_LIST = 'SET_PARENTS_LIST',
  SET_STORAGE_FILTERS = 'SET_STORAGE_FILTERS',
}

interface SetStorageAction {
  type: StorageActionTypes.SET_STORAGE;
  payload: {
    usedSpace: number;
    diskSpace: number;
    items: (Track | Album | Folder)[];
  };
}

interface SetStorageFiltersAction {
  type: StorageActionTypes.SET_STORAGE_FILTERS;
  payload: StorageFilter;
}

interface SetParentsListAction {
  type: StorageActionTypes.SET_PARENTS_LIST;
  payload: Folder[];
}

interface CreateFolderAction {
  type: StorageActionTypes.CREATE_FOLDER;
  payload: Folder;
}

interface SetShowCreateFolderAction {
  type: StorageActionTypes.SET_SHOW_FOLDER;
  payload: boolean;
}

interface SetCurrentAction {
  type: StorageActionTypes.SET_CURRENT;
  payload: string;
}

interface SetStoragetLoadingAction {
  type: StorageActionTypes.SET_STORAGE_LOADING;
  payload: boolean;
}

interface SetItemsAction {
  type: StorageActionTypes.SET_ITEMS;
  payload: (Track | Album | Folder)[];
}

interface SetErrorAction {
  type: StorageActionTypes.SET_ERROR;
  payload: string | null;
}

export type StorageAction =
  | SetStoragetLoadingAction
  | SetItemsAction
  | SetErrorAction
  | SetStorageAction
  | SetCurrentAction
  | SetShowCreateFolderAction
  | CreateFolderAction
  | SetParentsListAction
  | SetStorageFiltersAction;
