import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { Childrens, Folder, StorageResponse } from '../types/storage';

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
}
