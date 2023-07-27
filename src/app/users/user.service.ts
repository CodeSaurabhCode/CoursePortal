import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = false;
  private currentUserRole = '';

  constructor() {}

  login(email: string, password: string): boolean {
    if (email === 'user@gmail.com' && password === 'Pa$$w0rd') {
      this.currentUserRole = 'user';
      this.loggedIn = true;
      return true;
    } else if (email === 'admin@gmail.com' && password === 'Pa$$w0rd') {
      this.currentUserRole = 'admin';
      this.loggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
    this.currentUserRole = '';
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getCurrentUserRole(): string {
    return this.currentUserRole;
  }
}
