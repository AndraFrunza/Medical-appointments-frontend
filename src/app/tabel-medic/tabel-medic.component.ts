import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Table {
  position: number;
  nume: string;
  prenume: string;
  detalii: string;
  timp: number;
  tratament: string;
}

const ELEMENT_DATA: Table[] = [
  {
    position: 1,
    nume: 'Popa',
    prenume: 'Aurel',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 2,
    nume: 'Helium',
    prenume: 'Andrei',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 3,
    nume: 'Lithium',
    prenume: 'Andreea',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 4,
    nume: 'Beryllium',
    prenume: 'Cosmina',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 5,
    nume: 'Boron',
    prenume: 'Andra',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 6,
    nume: 'Carbon',
    prenume: 'Ovidiu',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 7,
    nume: 'Nitrogen',
    prenume: 'Diana',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 8,
    nume: 'Oxygen',
    prenume: 'Alexandra',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 9,
    nume: 'Fluorine',
    prenume: 'Georgiana',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
  {
    position: 10,
    nume: 'Neon',
    prenume: 'George',
    detalii: 'H',
    timp: 5,
    tratament: '',
  },
];

@Component({
  selector: 'app-tabel-medic',
  templateUrl: './tabel-medic.component.html',
  styleUrls: ['./tabel-medic.component.css'],
})
export class TabelMedicComponent {
  displayedColumns: string[] = [
    'position',
    'nume',
    'prenume',
    'detalii',
    'timp',
    'tratament',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
