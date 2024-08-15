import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, ObservableLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  findAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users/find');
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/api/users/find/${id}`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/api/users/create', user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:8080/api/users/update/${user.id}`, user);
  }
}
