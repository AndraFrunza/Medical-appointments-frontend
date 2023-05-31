import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorService } from '../servicies/doctor.service';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-admin-tabel-medici',
  templateUrl: './admin-tabel-medici.component.html',
  styleUrls: ['./admin-tabel-medici.component.css'],
})
export class AdminTabelMediciComponent implements OnInit {
  constructor(private doctorService: DoctorService) {}

  displayedColumns: string[] = [
    'id',
    'lastName',
    'firstName',
    'specialization',
    'cabinet',
    'email',
    'mobilePhone',
  ];
  dataSource = new MatTableDataSource<Doctor>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.doctorService.getAll().subscribe((doctors: Doctor[]) => {
      this.dataSource.data = doctors;
      console.log('all-doctors', this.dataSource.data);
    });
  }
}
