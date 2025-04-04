import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' },
  ];

  constructor() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  login(username: string, password: string): boolean {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find((u: { username: string; password: string; }) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  isAdmin(): boolean {
    return this.getUser()?.role === 'admin';
  }

  isUser(): boolean {
    return this.getUser()?.role === 'user';
  }
}
