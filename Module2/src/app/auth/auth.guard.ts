import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthUtils } from './shared/utils/auth-ultis';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (AuthUtils.isAuthenticated() && AuthUtils.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
