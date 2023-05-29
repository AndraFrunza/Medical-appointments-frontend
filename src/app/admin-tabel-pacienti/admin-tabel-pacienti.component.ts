import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Table {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
}

const ELEMENT_DATA: Table[] = [
  {
    id: 1,
    firstName: 'Aurel',
    lastName: 'Popa',
    email: 'aurelpopa@yahoo.com',
    mobilePhone: '+4071222121',
  },
  {
    id: 2,
    firstName: 'Andrei',
    lastName: 'Neacsu',
    email: 'andrei.n@gmail.com',
    mobilePhone: '+4071222121',
  },
  {
    id: 3,
    firstName: 'Mihai',
    lastName: 'Constantin',
    email: 'mc@yahoo.com',
    mobilePhone: '+4071222121',
  },
];

@Component({
  selector: 'app-admin-tabel-pacienti',
  templateUrl: './admin-tabel-pacienti.component.html',
  styleUrls: ['./admin-tabel-pacienti.component.css'],
})
export class AdminTabelPacientiComponent {
  displayedColumns: string[] = [
    'id',
    'lastName',
    'firstName',
    'email',
    'mobilePhone',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
