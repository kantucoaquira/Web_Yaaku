export class AuthResponse {
  token?: string;
  type?: string;
  id?: number;
  username?: string;
  email?: string;
  roles?: string[];



  // Ejemplo: método para verificar si el usuario es admin
  isAdmin(): boolean {
    return this.roles!.includes('ROLE_ADMIN');
  }

  // Ejemplo: método para obtener token con prefijo
  getAuthorizationHeader(): string {
    return `${this.type} ${this.token}`;
  }
}
