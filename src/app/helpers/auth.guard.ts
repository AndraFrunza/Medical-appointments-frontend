import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../servicies/authentication.service';
import { Role } from '../models/role';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const response = this.authenticationService.response;
    if (response) {
      // check if route is restricted by role
      const { roles } = route.data;
      if (
        roles &&
        !roles.find((obj: Role) => obj.id === response.user.role.id)
      ) {
        // role not authorized so redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // authorized so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/cart'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
