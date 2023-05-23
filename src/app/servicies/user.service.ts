import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientBackendService } from 'angular-in-memory-web-api';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>('http://localhost:4000/users/get-all');
  }

  getById(id: number) {
    return this.http.get<User[]>(`http://localhost:4000/users?id=${id}`);
  }
}
