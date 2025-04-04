export interface User {
    id: string;
    username: string;
    password: string;
    role: 'admin' | 'user';
  }
export interface UserLogin {
    username: string;
    password: string;   }  