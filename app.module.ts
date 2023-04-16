import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './first-page/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './main-page/product-details.component';
import { CartComponent } from './logare/cart.component';
import { ContNouComponent } from './cont-nou/cont-nou.component';

import { HttpClientModule } from '@angular/common/http';

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
import { EchipaComponent } from './echipa/echipa.component';
import { ContactComponent } from './contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CalendarComponent } from './calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cont-nou', component: ContNouComponent },
      { path: 'echipa', component: EchipaComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'calendar', component: CalendarComponent },
      // AgmCoreModule.forRoot({
      //   apiKey: 'AIzaSyDI0djhTT0sYYAOt8U1F2oaysjHy53DG2s',
      // }),
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
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class AppModule {}
