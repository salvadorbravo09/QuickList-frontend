import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Salvador',
      lastname: 'Bravo',
      email: 'sa.bravo0901@gmail.com',
      username: 'sa.bravo',
      password: '12345',
    },
    {
      id: 2,
      name: 'Yara',
      lastname: 'Carrillo',
      email: 'yara@gmail.com',
      username: 'yarita',
      password: '12345',
    },
  ];

  constructor() {}

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
