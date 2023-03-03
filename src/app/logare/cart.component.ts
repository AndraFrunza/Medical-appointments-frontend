import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
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
    role: [
      'jobSeeker',
      { validators: [Validators.required], updateOn: 'change' },
    ],
  });

  ngOnInit() {
    this.setPhoneValidation();
  }

  setPhoneValidation() {
    const phoneControl = this.registerForm.get('phone');

    // if (phoneControl != null) {
    phoneControl?.setValidators([
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]);

    this.registerForm.get('role')?.valueChanges.subscribe((role: string) => {
      if (role == 'jobSeeker') {
        phoneControl?.setValidators([
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]);
      } else if (role == 'employee') {
        phoneControl?.setValidators([Validators.pattern('^[0-9]*$')]);
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
