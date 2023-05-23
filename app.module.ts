import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';

import { FormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CalendarComponent } from 'src/app/calendar/calendar.component';
import { EchipaComponent } from 'src/app/echipa/echipa.component';
import { ProductListComponent } from 'src/app/first-page/product-list.component';
import { ProductDetailsComponent } from 'src/app/main-page/product-details.component';
import { CartComponent } from 'src/app/logare/cart.component';
import { ContNouComponent } from 'src/app/cont-nou/cont-nou.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { TopBarComponent } from 'src/app/components/top-bar/top-bar.component';
import { ProductAlertsComponent } from 'src/app/product-alerts/product-alerts.component';
import { AuthGuard } from 'src/app/helpers/auth.guard';
import { Role } from 'src/app/models/role';
import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
import { MatDialogModule } from '@angular/material/dialog';

const roles: Role[] = [
  {
    id: 1,
    name: 'Patient',
  },
  {
    id: 2,
    name: 'Doctor',
  },
  {
    id: 3,
    name: 'Admin',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }, //prima pagina
      {
        path: 'products/:productId',
        component: ProductDetailsComponent,
        canActivate: [AuthGuard],
        data: { roles: [roles[0]] },
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      { path: 'cont-nou', component: ContNouComponent },
      {
        path: 'echipa',
        component: EchipaComponent,
        canActivate: [AuthGuard],
        data: { roles: [roles[0]] },
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthGuard],
        data: { roles: [roles[0], roles[1], roles[2]] },
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [AuthGuard],
        data: { roles: [roles[0]] },
      },
    ]),
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatGridListModule,
    GoogleMapsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ContNouComponent,
    EchipaComponent,
    ContactComponent,
    CalendarComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class AppModule {}
