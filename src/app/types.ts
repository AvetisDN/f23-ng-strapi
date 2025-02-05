export type ThemeType = 'sys' | 'dark' | 'light';

export interface ThemeInterface {
  theme: ThemeType;
}

export interface AuthCredentials {
  username: string;
  email: string;
  password: string;
}

export interface AuthLoginCredentials {
  identifier: string;
  password: string;
}

export type ToastType = 'success' | 'error' | 'info';
export interface Toast {
  show: boolean;
  type: ToastType;
  text: string;
}

export interface StrapiUser {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiAuthResponse {
  jwt: string;
  user: StrapiUser;
}
