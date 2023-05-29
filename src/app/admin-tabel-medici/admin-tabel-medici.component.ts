import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Table {
  id: number;
  firstName: string;
  lastName: string;
  specialization: string;
  cabinet: string;
  email: string;
  mobilePhone: string;
}

const ELEMENT_DATA: Table[] = [
  {
    id: 1,
    firstName: 'Aurel',
    lastName: 'Popa',
    specialization: 'medic neurolog',
    cabinet: 'Neurologie',
    email: 'aurelpopa@yahoo.com',
    mobilePhone: '+4071222121',
  },
  {
    id: 2,
    firstName: 'Andrei',
    lastName: 'Neacsu',
    specialization: 'medic chirurg',
    cabinet: 'Chirurgie',
    email: 'andrei.n@gmail.com',
    mobilePhone: '+4071222121',
  },
  {
    id: 3,
    firstName: 'Mihai',
    lastName: 'Constantin',
    specialization: 'medic oftalmolog',
    cabinet: 'Oftalmologie',
    email: 'mc@yahoo.com',
    mobilePhone: '+4071222121',
  },
];

@Component({
  selector: 'app-admin-tabel-medici',
  templateUrl: './admin-tabel-medici.component.html',
  styleUrls: ['./admin-tabel-medici.component.css'],
})
export class AdminTabelMediciComponent {
  displayedColumns: string[] = [
    'id',
    'lastName',
    'firstName',
    'specialization',
    'cabinet',
    'email',
    'mobilePhone',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
