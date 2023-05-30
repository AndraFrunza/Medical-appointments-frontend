import { Cabinet } from './cabinet';
import { Role } from './role';

export interface Doctor {
  id: number;
  specialization: string;
  mobilePhone: string;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  cabinet: Cabinet;
}
