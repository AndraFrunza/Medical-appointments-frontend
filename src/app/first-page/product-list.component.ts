import { Component } from '@angular/core';
import { AuthenticationService } from '../servicies/authentication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.authenticationResponse.subscribe(
      (x) => (this.user = x?.user)
    );
  }
  user: any;
  //metode
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  isLoggedOut() {
    return !this.user; // Verificați dacă utilizatorul este null sau undefined pentru a determina dacă este delogat
  }
}
