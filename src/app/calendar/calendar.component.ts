import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Cabinet } from '../models/cabinet';
import { CabinetService } from '../servicies/cabinet.service';
import { MatSelectChange } from '@angular/material/select';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../servicies/doctor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../models/patient';
import { PatientService } from '../servicies/patient.service';
import { AuthenticationService } from '../servicies/authentication.service';
import { User } from '../models/user';
import { AppointmentService } from '../servicies/appointment.service';
import { Appointment } from '../models/appointment';
import { catchError, throwError } from 'rxjs';

export interface Task {
  color: ThemePalette;
}

interface Hours {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  task: Task = { color: 'warn' };
  hours: Hours[] = [
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
    { value: '11', viewValue: '11' },
    { value: '12', viewValue: '12' },
    { value: '13', viewValue: '13' },
    { value: '14', viewValue: '14' },
    { value: '15', viewValue: '15' },
    { value: '16', viewValue: '16' },
    { value: '17', viewValue: '17' },
    { value: '18', viewValue: '18' },
    { value: '19', viewValue: '19' },
  ];
  submitStatus: boolean = false;

  selected!: Date | null;
  color: ThemePalette = 'warn';
  cabinets: Cabinet[] = [];
  doctors: Doctor[] = [];
  patient: Patient | undefined;
  selectedCabinet?: Cabinet | null;
  selectedDoctor?: Doctor | null;
  selectedHour: number = 7;
  errorMsg: string = '';

  constructor(
    private cabinetService: CabinetService,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private authenticationService: AuthenticationService,
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder
  ) {}
  registerForm: FormGroup = this.formBuilder.group({
    fullName: [, { validators: [Validators.required], updateOn: 'change' }],
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    phone: [, { updateOn: 'change' }],

    symptoms: ['', { validators: [Validators.required], updateOn: 'change' }],
    dateOfBirth: [
      '',
      { validators: [Validators.required], updateOn: 'change' },
    ],
    weight: ['', { validators: [Validators.required], updateOn: 'change' }],
    height: ['', { validators: [Validators.required], updateOn: 'change' }],
  });

  ngOnInit() {
    this.cabinetService.getAll().subscribe((cabinets: Cabinet[]) => {
      this.cabinets = cabinets;
      console.log('all-cabinets', this.cabinets);
    });

    this.setPhoneValidation();

    let user: User | undefined;
    this.authenticationService.authenticationResponse.subscribe(
      (x) => (user = x?.user)
    );
    if (user) {
      this.patientService
        .getPatientByUserId(user.id)
        .subscribe((patient: Patient) => {
          this.patient = patient;
          this.setPatientData();
        });
    }
  }

  setPatientData() {
    this.registerForm.controls['fullName'].setValue(
      this.patient?.firstName + ' ' + this.patient?.lastName
    );
    this.registerForm.controls['email'].setValue(this.patient?.email);
    this.registerForm.controls['phone'].setValue(this.patient?.mobilePhone);
  }

  clearPatientData() {
    this.registerForm.controls['fullName'].setValue('');
    this.registerForm.controls['email'].setValue('');
    this.registerForm.controls['phone'].setValue('');
  }

  onCheckboxChange(event: any) {
    if (event.checked) {
      this.clearPatientData();
    } else {
      this.setPatientData();
    }
  }

  // Validare număr de telefon
  setPhoneValidation() {
    const phoneControl = this.registerForm.get('phone');

    phoneControl?.setValidators([
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]);
  }

  submitForm() {
    console.log(this.registerForm.valid);
    this.submitStatus = true;
    if (this.registerForm.valid) {
      const appointment: Appointment = {
        id: 0,
        date: this.selected!,
        hour: parseInt(this.selectedHour.toString()),
        symptom: this.registerForm.get('symptoms')?.value,
        mobilePhone: this.registerForm.get('phone')?.value,
        emailAdress: this.registerForm.get('email')?.value,
        dateOfBirth: new Date(
          this.registerForm.get('dateOfBirth')?.value.toString()
        ),
        weight: parseFloat(this.registerForm.get('weight')?.value.toString()),
        height: parseInt(this.registerForm.get('height')?.value.toString()),
        doctor: this.selectedDoctor!,
        patient: this.patient!,
        present: false,
      };
      console.log(appointment);
      this.errorMsg = '';
      this.appointmentService
        .create(appointment)
        .pipe(
          catchError((error) => {
            this.errorMsg = ` ${error.error.message}`;
            return throwError(() => error);
          })
        )
        .subscribe((createdAppointment) => console.log(createdAppointment));
    }
  }

  cabinetSelected(selection: MatSelectChange) {
    console.log(selection);
    if (selection.value) {
      const cabinetId = selection.value;
      //call catre doctor
      this.doctorService
        .getByCabinetId(cabinetId)
        .subscribe((doctors: Doctor[]) => {
          this.doctors = doctors;
          console.log('all-doctors', this.doctors);
        });
    }
  }
}
