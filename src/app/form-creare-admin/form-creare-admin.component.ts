import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../servicies/admin.service';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-form-creare-admin',
  templateUrl: './form-creare-admin.component.html',
  styleUrls: ['./form-creare-admin.component.css'],
})
export class FormCreareAdminComponent {
  submitStatus: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  adminForm: FormGroup = this.formBuilder.group({
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    firstName: [
      ,
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    lastName: [
      ,
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    role: ['user', { validators: [Validators.required], updateOn: 'change' }],
  });

  submitForm() {
    console.log(this.adminForm.valid);
    this.submitStatus = true;
    if (this.adminForm.valid) {
      const admin: Admin = {
        id: 0,
        firstName: this.adminForm.get('firstName')?.value,
        lastName: this.adminForm.get('lastName')?.value,
        email: this.adminForm.get('email')?.value,
        roleId: 3,
      };

      this.adminService.create(admin).subscribe((response) => {
        console.log('Contul de admin a fost creat cu succes:', response);
        this.submitStatus = true;
      });
    }
  }
}
