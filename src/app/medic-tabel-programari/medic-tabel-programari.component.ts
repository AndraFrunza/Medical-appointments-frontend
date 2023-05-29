import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from '../servicies/appointment.service';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-medic-tabel-programari',
  templateUrl: './medic-tabel-programari.component.html',
  styleUrls: ['./medic-tabel-programari.component.css'],
})
export class MedicTabelProgramariComponent implements OnInit {
  constructor(private appointmentService: AppointmentService) {}
  ngOnInit() {
    this.getAppointments();
  }
  getAppointments() {
    this.appointmentService
      .getAll()
      .subscribe((appointments: Appointment[]) => {
        this.dataSource.data = appointments;
      });
  }

  displayedColumns: string[] = [
    'hour',
    'symptom',
    'mobilePhone',
    'emailAdress',
    'dateOfBirth',
    'weight',
    'height',
  ];

  dataSource = new MatTableDataSource<Appointment>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
