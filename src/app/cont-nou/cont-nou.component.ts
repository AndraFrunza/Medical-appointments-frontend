import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cont-nou',
  templateUrl: './cont-nou.component.html',
  styleUrls: ['./cont-nou.component.css'],
})
export class ContNouComponent implements OnInit {
  submitStatus: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  registerForm: FormGroup = this.formBuilder.group({
    firstName: [, { validators: [Validators.required], updateOn: 'change' }],
    lastName: [, { validators: [Validators.required], updateOn: 'change' }],
    specialization: [
      ,
      { validators: [Validators.required], updateOn: 'change' },
    ],
    cabinet: [, { validators: [Validators.required], updateOn: 'change' }],
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
  }

  // Validare număr de telefon
  setPhoneValidation() {
    const phoneControl = this.registerForm.get('phone');

    // if (phoneControl != null) {
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
  // }

  submitForm() {
    console.log(this.registerForm.valid);
    this.submitStatus = true;
  }

  get isPatientSelected() {
    return this.registerForm.get('role')?.value === 'patient';
  }

  get isDoctorSelected() {
    return this.registerForm.get('role')?.value === 'doctor';
  }
}
