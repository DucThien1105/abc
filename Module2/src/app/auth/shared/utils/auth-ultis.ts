export class AuthUtils {
    static isAuthenticated(): boolean {
      const authToken = localStorage.getItem('authToken');
      return !!authToken;
    }
    static isAdmin(): boolean {
      const userRoles = localStorage.getItem('authRoles');
      return userRoles ? JSON.parse(userRoles).includes('admin') : false;
    }
  }
  