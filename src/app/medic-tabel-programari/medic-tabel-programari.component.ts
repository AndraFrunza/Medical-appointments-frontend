import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from '../servicies/appointment.service';
import { Appointment } from '../models/appointment';
import { AuthenticationService } from '../servicies/authentication.service';
import { User } from '../models/user';
import { PatientService } from '../servicies/patient.service';
import { AdminService } from '../servicies/admin.service';
import { DoctorService } from '../servicies/doctor.service';

@Component({
  selector: 'app-medic-tabel-programari',
  templateUrl: './medic-tabel-programari.component.html',
  styleUrls: ['./medic-tabel-programari.component.css'],
})
export class MedicTabelProgramariComponent implements OnInit {
  doctorId: any;
  tratament: string = '';
  constructor(
    private appointmentService: AppointmentService,
    private authenticationService: AuthenticationService,
    private patientService: PatientService,
    private adminService: AdminService,
    private doctorService: DoctorService
  ) {}
  user: User | undefined;
  ngOnInit() {
    this.authenticationService.authenticationResponse.subscribe(
      (x) => (this.user = x?.user)
    );
    if (this.user) {
      switch (this.user.role.id) {
        case 1: {
          this.patientService
            .getPatientByUserId(this.user.id)
            .subscribe((patient) => {
              this.appointmentService
                .getAppointmentsByPatientId(patient.id)
                .subscribe((appointments) => {
                  this.dataSource.data = appointments;
                });
            });
          break;
        }

        case 2: {
          this.doctorService
            .getDoctorByUserId(this.user.id)
            .subscribe((doctor) => {
              this.appointmentService
                .getAppointmentsByDoctorId(doctor.id)
                .subscribe((appointments) => {
                  this.dataSource.data = appointments;
                });
            });
          break;
        }

        case 3: {
          this.appointmentService.getAll().subscribe((appointments) => {
            this.dataSource.data = appointments;
          });
          break;
        }
      }
    }
  }

  displayedColumns: string[] = [
    'hour',
    'symptom',
    'mobilePhone',
    'emailAdress',
    'dateOfBirth',
    'weight',
    'height',
    'checked',
    'trataments',
  ];

  dataSource = new MatTableDataSource<Appointment>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateAppointment(appointment: Appointment, checked: boolean) {
    console.log(appointment);
    console.log(checked);
    appointment.present = checked; // Actualizează starea programării
    this.appointmentService
      .updateAppointment(appointment)
      .subscribe((updatedAppointment) => {
        console.log('Programarea a fost actualizată:', updatedAppointment);
      });
  }

  updateTrataments(appointment: Appointment) {
    console.log(appointment);
    this.appointmentService
      .updateAppointment(appointment)
      .subscribe((updatedAppointment) => {
        console.log('Programarea a fost actualizată:', updatedAppointment);
      });
  }
}
