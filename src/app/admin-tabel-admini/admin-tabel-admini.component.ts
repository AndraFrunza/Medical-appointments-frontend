import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Table {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Table[] = [
  {
    id: 1,
    firstName: 'Aurel',
    lastName: 'Popa',
    email: 'aurelpopa@yahoo.com',
  },
  {
    id: 2,
    firstName: 'Andrei',
    lastName: 'Neacsu',
    email: 'andrei.n@gmail.com',
  },
  {
    id: 3,
    firstName: 'Mihai',
    lastName: 'Constantin',
    email: 'mc@yahoo.com',
  },
];

@Component({
  selector: 'app-admin-tabel-admini',
  templateUrl: './admin-tabel-admini.component.html',
  styleUrls: ['./admin-tabel-admini.component.css'],
})
export class AdminTabelAdminiComponent {
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
