import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _authenticated = false;
  constructor() { }

  authenticate(login: string, senha: string): boolean {
    this._authenticated = false;
    if (login === "test@example.org" && senha === "123") {
      this._authenticated = true;
    }

    return this.isAuthenticated();
  }

  isAuthenticated(): boolean {
    return this._authenticated;
  }

}
