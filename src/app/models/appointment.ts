import { Doctor } from './doctor';
import { Patient } from './patient';

export interface Appointment {
  id: number;
  date: Date;
  hour: number;
  symptom: string;
  mobilePhone: string;
  emailAdress: string;
  dateOfBirth: Date;
  weight: number;
  height: number;
  present: boolean;
  doctor: Doctor;
  patient: Patient;
}
