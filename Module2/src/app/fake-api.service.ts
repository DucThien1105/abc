import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  private users: { username: string; password: string }[] = [];
  constructor() {
    this.users.push({ username: 'DucThien', password: 'DucThien1105' });
  }
  authenticate(username: string, password: string): Observable<any> {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      return of({ token: 'exampleToken', roles: ['user'] });
    } else {
      return throwError('Invalid credentials');
    }
  }
}
