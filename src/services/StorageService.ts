import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { Album, Childrens, Folder, StorageResponse, Track } from '../types/storage';

export class StorageService {
  static fetchItems(storageId: string): Promise<AxiosResponse<StorageResponse>> {
    return $api.get<StorageResponse>(`/api/storages/${storageId}`);
  }

  static fetchChildrens(parentId: string): Promise<AxiosResponse<Childrens>> {
    return $api.get<Childrens>(`/api/search/childrens/${parentId}`);
  }

  static fetchParents(childId: string): Promise<AxiosResponse<Folder[]>> {
    return $api.get<Folder[]>(`/api/folders/parents/${childId}`);
  }

  static deleteItem(itemId: string): Promise<AxiosResponse<(Folder | Album | Track)[]>> {
    return $api.post<(Folder | Album | Track)[]>(`/api/delete/${itemId}`);
  }
}
