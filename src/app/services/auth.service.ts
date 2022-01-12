import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isValidated = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.isValidated;
  }

  validateData(formData: {username: string, password: string}) {
    this.isValidated = !!formData;
  }
}
