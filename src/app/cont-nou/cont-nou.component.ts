import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PatientService } from '../servicies/patient.service';
import { DoctorService } from '../servicies/doctor.service';
import { Patient } from '../models/patient';
import { Doctor } from '../models/doctor';
import { Cabinet } from '../models/cabinet';
import { MatSelectChange } from '@angular/material/select';
import { CabinetService } from '../servicies/cabinet.service';

@Component({
  selector: 'app-cont-nou',
  templateUrl: './cont-nou.component.html',
  styleUrls: ['./cont-nou.component.css'],
})
export class ContNouComponent implements OnInit {
  submitStatus: boolean = false;
  cabinet!: Cabinet;
  selectedCabinet?: Cabinet | null;
  cabinets: Cabinet[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private cabinetService: CabinetService
  ) {}

  registerForm: FormGroup = this.formBuilder.group({
    firstName: [, { validators: [Validators.required], updateOn: 'change' }],
    lastName: [, { validators: [Validators.required], updateOn: 'change' }],
    specialization: [, { updateOn: 'change' }],
    cabinet: [, { updateOn: 'change' }],
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    phone: [, { updateOn: 'change' }],
    password: [, { validators: [Validators.required], updateOn: 'change' }],
    role: ['user', { validators: [Validators.required], updateOn: 'change' }],
  });

  ngOnInit() {
    this.setPhoneValidation();
    this.cabinetService.getAll().subscribe((cabinets: Cabinet[]) => {
      this.cabinets = cabinets;
      console.log('all-cabinets', this.cabinets);
    });
  }

  // Validare număr de telefon
  setPhoneValidation() {
    const phoneControl = this.registerForm.get('phone');

    phoneControl?.setValidators([
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]);

    this.registerForm.get('role')?.valueChanges.subscribe((role: string) => {
      if (role == 'patient' || role == 'doctor') {
        phoneControl?.setValidators([
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]);
      }
      phoneControl?.updateValueAndValidity();
    });
  }

  submitForm() {
    console.log(this.registerForm.valid);
    this.submitStatus = true;
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      if (formData.role === 'patient') {
        const patient: Patient = {
          id: 0,
          firstName: this.registerForm.get('firstName')?.value,
          lastName: this.registerForm.get('lastName')?.value,
          mobilePhone: this.registerForm.get('phone')?.value,
          email: this.registerForm.get('email')?.value,
          roleId: 1,
        };

        this.patientService.postCreate(patient).subscribe((response) => {
          console.log('Contul de pacient a fost creat cu succes:', response);
          this.submitStatus = true;
        });
      } else if (formData.role === 'doctor') {
        const doctor: Doctor = {
          id: 0,
          specialization: this.registerForm.get('specialization')?.value,
          firstName: this.registerForm.get('firstName')?.value,
          lastName: this.registerForm.get('lastName')?.value,
          mobilePhone: this.registerForm.get('phone')?.value,
          email: this.registerForm.get('email')?.value,
          cabinet: {
            id: this.registerForm.get('cabinet')?.value,
            name: '',
          },
          roleId: 2,
        };

        console.log(doctor);
        this.doctorService.postCreate(doctor).subscribe((response) => {
          console.log('Contul de doctor a fost creat cu succes:', response);
          this.submitStatus = true;
        });
      }
    }
  }

  get isPatientSelected() {
    return this.registerForm.get('role')?.value === 'patient';
  }

  get isDoctorSelected() {
    return this.registerForm.get('role')?.value === 'doctor';
  }
}
