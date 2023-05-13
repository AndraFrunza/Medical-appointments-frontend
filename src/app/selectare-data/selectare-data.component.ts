import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  color: ThemePalette;
}

interface Hours {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selectare-data',
  templateUrl: './selectare-data.component.html',
  styleUrls: ['./selectare-data.component.css'],
})
export class SelectareDataComponent implements OnInit {
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
  constructor(private formBuilder: FormBuilder) {}

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
      if (role == 'patient') {
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
}
