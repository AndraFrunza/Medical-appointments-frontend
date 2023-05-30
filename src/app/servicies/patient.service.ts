import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({ providedIn: 'root' })
export class PatientService {
  constructor(private http: HttpClient) {}

  getPatientByUserId(id: number) {
    return this.http.get<Patient>(
      `http://localhost:4000/patients/userId/${id}`
    );
  }

  getAll() {
    return this.http.get<Patient[]>('http://localhost:4000/patients/get-all');
  }

  postCreate(patient: Patient) {
    return this.http.post<Patient>('http://localhost:4000/patients', patient);
  }
}
