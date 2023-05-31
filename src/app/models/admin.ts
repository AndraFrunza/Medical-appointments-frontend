import { Role } from './role';

export interface Admin {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: number;
}
