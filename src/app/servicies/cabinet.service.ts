import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cabinet } from '../models/cabinet';

@Injectable({ providedIn: 'root' })
export class CabinetService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Cabinet[]>('http://localhost:4000/cabinets/get-all');
  }

  getById(id: number) {
    return this.http.get<Cabinet>(`http://localhost:4000/cabinets?id=${id}`);
  }
}
