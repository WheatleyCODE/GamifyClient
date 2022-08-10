import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { AccessType, Folder } from '../types/storage';

export class FolderService {
  static async createFolder(strgId: string, name: string, parentId?: string): Promise<AxiosResponse<Folder>> {
    return $api.post<Folder>('/api/folders', {
      storageId: strgId,
      name,
      parentId,
    });
  }

  static async rename(folderId: string, name: string): Promise<AxiosResponse<Folder>> {
    return $api.post<Folder>('/api/folders/rename', {
      folderId,
      name,
    });
  }

  static async changeAccessType(folderId: string, accessType: AccessType): Promise<AxiosResponse<Folder>> {
    return $api.post<Folder>('/api/folders/change/access', {
      folderId,
      accessType,
    });
  }

  static async createAccesLink(folderId: string): Promise<AxiosResponse<Folder>> {
    return $api.post<Folder>('/api/folders/create/access-link', {
      folderId,
    });
  }
}
