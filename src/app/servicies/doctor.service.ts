import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Doctor[]>('http://localhost:4000/doctors/get-all');
  }

  getByCabinetId(id: number) {
    return this.http.get<Doctor[]>(
      `http://localhost:4000/doctors/cabinet/${id}`
    );
  }
}
