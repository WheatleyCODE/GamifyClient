export enum ItemTypes {
  ALBUM = 'album',
  FILE = 'file',
  FOLDER = 'folder',
  IMAGE = 'image',
  NOTE = 'note',
  TRACK = 'track',
  VIDEO = 'video',
}

export enum AccessType {
  PRIVATE = 'PRIVATE',
  PUBLICK = 'PUBLICK',
  ACCESS_LINK = 'ACCESS_LINK',
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
  accesLink?: string;
  accessType: AccessType;
  creationDate: number;
  openDate: number;
}

export interface Folder {
  _id: string;
  type: ItemTypes;
  user: string;
  name: string;
  accesLink?: string;
  accessType: AccessType;
  creationDate: number;
  openDate: number;
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
  accesLink?: string;
  accessType: AccessType;
  creationDate: number;
  openDate: number;
}

export interface StorageFilter {
  name: boolean;
  owner: boolean;
  date: boolean;
  size: boolean;
}

export interface StorageState {
  items: (Track | Album | Folder)[];
  target: Track | Album | Folder;
  showCreateFolder: boolean;
  showAccessModal: boolean;
  showLinkModal: boolean;
  showRenameModal: boolean;
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
  SET_SHOW_ACCESS_MODAL = 'SET_SHOW_ACCESS_MODAL',
  SET_SHOW_LINK_MODAL = 'SET_SHOW_LINK_MODAL',
  SET_SHOW_RENAME_MODAL = 'SET_SHOW_RENAME_MODAL',
  CREATE_FOLDER = 'CREATE_FOLDER',
  SET_PARENTS_LIST = 'SET_PARENTS_LIST',
  SET_STORAGE_FILTERS = 'SET_STORAGE_FILTERS',
  REPLACE_ITEM = 'REPLACE_ITEM',
}

interface SetStorageAction {
  type: StorageActionTypes.SET_STORAGE;
  payload: {
    usedSpace: number;
    diskSpace: number;
    items: (Track | Album | Folder)[];
  };
}

interface ReplaceItemAction {
  type: StorageActionTypes.REPLACE_ITEM;
  payload: {
    id: string;
    item: Track | Album | Folder;
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

interface SetShowAccessModalAction {
  type: StorageActionTypes.SET_SHOW_ACCESS_MODAL;
  payload: boolean;
}

interface SetShowLinkModalAction {
  type: StorageActionTypes.SET_SHOW_LINK_MODAL;
  payload: boolean;
}

interface SetShowRenameModalAction {
  type: StorageActionTypes.SET_SHOW_RENAME_MODAL;
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
  | SetStorageFiltersAction
  | SetShowAccessModalAction
  | SetShowLinkModalAction
  | SetShowRenameModalAction
  | ReplaceItemAction;
