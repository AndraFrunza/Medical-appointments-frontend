import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationResponse } from '../models/authentication-response';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<AuthenticationResponse | null>;
  public authenticationResponse: Observable<AuthenticationResponse | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.authenticationResponse = this.userSubject.asObservable();
  }

  public get response(): AuthenticationResponse {
    return this.userSubject.value!;
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthenticationResponse>(
        `http://localhost:4000/users/authenticate`,
        {
          email,
          password,
        }
      )
      .pipe(
        map((response) => {
          console.log(response);

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(response));
          this.userSubject.next(response);
          return response;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}
