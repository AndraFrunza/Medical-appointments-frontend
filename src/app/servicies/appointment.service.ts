import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Appointment[]>(
      'http://localhost:4000/appointments/get-all'
    );
  }

  getById(id: number) {
    return this.http.get<Appointment>(
      `http://localhost:4000/appointments?id=${id}`
    );
  }

  create(appointment: Appointment) {
    return this.http.post<Appointment>(
      `http://localhost:4000/appointments`,
      appointment
    );
  }

  getAppointmentsByPatientId(patientId: number) {
    return this.http.get<Appointment[]>(
      `http://localhost:4000/appointments/patientId/${patientId}`
    );
  }

  getAppointmentsByDoctorId(medicId: number) {
    return this.http.get<Appointment[]>(
      `http://localhost:4000/appointments/medicId/${medicId}`
    );
  }
}
