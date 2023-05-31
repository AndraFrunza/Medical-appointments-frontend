import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Admin[]>('http://localhost:4000/admins/get-all');
  }

  delete() {
    return this.http.delete<Admin[]>('http://localhost:4000/admins?id=${id}');
  }

  create(admin: Admin) {
    return this.http.post<Admin>('http://localhost:4000/admins', admin);
  }
}
