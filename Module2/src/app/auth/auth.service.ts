import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeApiService } from '../fake-api.service';
import { User } from './shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'authToken';
  private rolesKey: string = 'authRoles';
  redirectUrl: string = '';
  constructor(private fakeApiService: FakeApiService) {}

  authenticate(username: string, password: string): Observable<any> {
    return this.fakeApiService.authenticate(username, password);
  }

  getCurrentUser(): User | null {
    const userData = localStorage.getItem('currentUser');

    return userData ? JSON.parse(userData) : null;
  }
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  saveRoles(roles: string[]): void {
    localStorage.setItem(this.rolesKey, JSON.stringify(roles));
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRoles(): string[] {
    const rolesString = localStorage.getItem(this.rolesKey);
    return rolesString ? JSON.parse(rolesString) : [];
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.rolesKey);
  }
}
