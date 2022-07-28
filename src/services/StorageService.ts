import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { StorageResponse } from '../types/storage';

export class StorageService {
  static fetchItems(storageId: string): Promise<AxiosResponse<StorageResponse>> {
    return $api.get<StorageResponse>(`/api/storages/${storageId}`);
  }
}
