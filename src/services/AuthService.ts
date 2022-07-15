import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { AuthResponse } from '../types/auth';

export class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/api/auth/login', { email, password });
  }

  static async registration(
    nickName: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/api/auth/registration', {
      nickName,
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    return $api.post('/api/auth/logout');
  }

  static async resetPassword(email: string): Promise<void> {
    return $api.post('/api/auth/reset/password', { email });
  }
}
