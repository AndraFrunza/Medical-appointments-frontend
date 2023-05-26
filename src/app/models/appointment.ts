import { Doctor } from './doctor';
import { Patient } from './patient';

export interface Appointment {
  id: number;
  hour: number;
  symptom: string;
  mobilePhone: string;
  dateOfBirth: number;
  weight: number;
  height: number;
  doctor: Doctor;
  patient: Patient;
}
