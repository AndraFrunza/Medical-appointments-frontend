import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 45.798104, lng: 24.161309 },
    zoom: 14,
  };
  marker = {
    position: { lat: 45.798104, lng: 24.161309 },
  };
}
