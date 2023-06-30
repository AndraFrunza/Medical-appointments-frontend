import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../servicies/patient.service';
import { AuthenticationService } from '../servicies/authentication.service';
import { Patient } from '../models/patient';
import { AdminService } from '../servicies/admin.service';

@Component({
  selector: 'app-admin-tabel-pacienti',
  templateUrl: './admin-tabel-pacienti.component.html',
  styleUrls: ['./admin-tabel-pacienti.component.css'],
})
export class AdminTabelPacientiComponent implements OnInit {
  patients: Patient[] | undefined;
  constructor(private patientService: PatientService) {}
  displayedColumns: string[] = [
    'id',
    'lastName',
    'firstName',
    'email',
    'mobilePhone',
  ];
  dataSource = new MatTableDataSource<Patient>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.patientService.getAll().subscribe((patients: Patient[]) => {
      this.dataSource.data = patients;
      console.log('all-patients', this.dataSource.data);
    });
  }
}
