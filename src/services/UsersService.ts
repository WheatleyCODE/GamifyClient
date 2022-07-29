import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { User } from '../types/users';

export class UsersService {
  static fetchUsers(): Promise<AxiosResponse<User[]>> {
    return $api.get<User[]>('/api/users');
  }
}
