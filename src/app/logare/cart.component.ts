import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../servicies/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  submitStatus: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    // phone: [, { updateOn: 'change' }],
    password: [, { validators: [Validators.required], updateOn: 'change' }],
    role: ['user', { validators: [Validators.required], updateOn: 'change' }],
  });

  // ngOnInit() {
  //   this.setPhoneValidation();
  // }

  // Validare număr de telefon
  // setPhoneValidation() {
  //   const phoneControl = this.registerForm.get('phone');

  // if (phoneControl != null) {
  //   phoneControl?.setValidators([
  //     Validators.pattern('^[0-9]*$'),
  //     Validators.required,
  //   ]);

  //   this.registerForm.get('role')?.valueChanges.subscribe((role: string) => {
  //     if (role == 'user') {
  //       phoneControl?.setValidators([
  //         Validators.pattern('^[0-9]*$'),
  //         Validators.required,
  //       ]);
  //     } else if (role == 'medic') {
  //       phoneControl?.setValidators([Validators.pattern('^[0-9]*$')]);
  //     }
  //     phoneControl?.updateValueAndValidity();
  //   });
  // }
  // }

  submitForm() {
    if (this.loginForm.valid) {
      this.authenticationService
        .login(
          this.loginForm.controls['email'].value,
          this.loginForm.controls['password'].value
        )
        .pipe(first())
        .subscribe({
          next: () => {
            // get return url from query parameters or default to home page
            const returnUrl =
              this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
          },
          error: (error) => {
            console.log('error', error);
          },
        });
    }
    console.log(this.loginForm.valid);
    this.submitStatus = true;
  }
}
