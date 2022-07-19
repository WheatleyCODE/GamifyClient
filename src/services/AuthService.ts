import { AxiosResponse } from 'axios';
import { $api } from '../http';
import {
  AuthResponse,
  ResetPassResponse,
  ChangePassResponse,
} from '../types/auth';

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

  static async resetPassword(
    email: string,
  ): Promise<AxiosResponse<ResetPassResponse>> {
    return $api.post<ResetPassResponse>('/api/auth/reset/password', { email });
  }

  static async changePassword(
    password: string,
    link: string,
  ): Promise<AxiosResponse<ChangePassResponse>> {
    return $api.post<ChangePassResponse>('/api/auth/change/password', {
      password,
      resetPasswordLink: link,
    });
  }

  static async loginByActivationLink(
    link: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/api/auth/login/activation-link', {
      activationLink: link,
    });
  }
}
