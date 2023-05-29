import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Table {
  hour: number;
  symptom: string;
  mobilePhone: string;
  emailAdress: string;
  dateOfBirth: number;
  weight: number;
  height: number;
}

const ELEMENT_DATA: Table[] = [
  {
    hour: 8,
    symptom: 'Aurel',
    mobilePhone: 'Popa',
    emailAdress: 'aurelpopa@yahoo.com',
    dateOfBirth: 12,
    weight: 55,
    height: 170,
  },
  {
    hour: 9,
    symptom: 'Andrei',
    mobilePhone: 'Neacsu',
    emailAdress: 'andrei.n@gmail.com',
    dateOfBirth: 12,
    weight: 65,
    height: 165,
  },
  {
    hour: 10,
    symptom: 'Mihai',
    mobilePhone: 'Constantin',
    emailAdress: 'mc@yahoo.com',
    dateOfBirth: 12,
    weight: 48,
    height: 158,
  },
];

@Component({
  selector: 'app-medic-tabel-programari',
  templateUrl: './medic-tabel-programari.component.html',
  styleUrls: ['./medic-tabel-programari.component.css'],
})
export class MedicTabelProgramariComponent {
  displayedColumns: string[] = [
    'hour',
    'symptom',
    'mobilePhone',
    'emailAdress',
    'dateOfBirth',
    'weight',
    'height',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
