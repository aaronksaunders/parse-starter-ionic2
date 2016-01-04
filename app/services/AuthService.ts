import {Injectable, provide} from 'angular2/core';

@Injectable()
export class AuthService {
  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }
  isLoggedIn(): any {
    return this.getUser() !== null;
  }
  getUser(): any {
    return localStorage.getItem('username');
  }
  logout(): any {
    return localStorage.getItem('username');
  }
}
