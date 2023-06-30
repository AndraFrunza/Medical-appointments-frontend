import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProgramareComponent } from 'src/app/dialog-programare/dialog-programare.component';
import { AuthenticationService } from 'src/app/servicies/authentication.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/servicies/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  buttonDisabled = false;
  users: User[] = [];
  user?: User | null;
  constructor(
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.authenticationService.authenticationResponse.subscribe(
      (x) => (this.user = x?.user)
    );
  }
  get isAdmin() {
    return this.user?.role.id === 3;
  }

  get isPatient() {
    return this.user?.role.id === 1;
  }

  get isMedic() {
    return this.user?.role.id === 2;
  }

  logout() {
    this.authenticationService.logout();
  }

  openDialog() {
    this.dialog.open(DialogProgramareComponent);
    this.userService.getAll().subscribe((users) => {
      this.users = users;
      console.log('all-users', this.users);
    });
    this.userService.getById(1).subscribe((user) => {
      console.log('userById', user);
    });
  }
  isLoggedOut() {
    return !this.user;
  }
}
