import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { User } from '../types/user';

export class UserService {
  static fetchUsers(): Promise<AxiosResponse<User[]>> {
    return $api.get<User[]>('/api/users');
  }
}
