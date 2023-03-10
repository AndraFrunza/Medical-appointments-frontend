import { Component } from '@angular/core';

@Component({
  selector: 'app-echipa',
  templateUrl: './echipa.component.html',
  styleUrls: ['./echipa.component.css'],
})
export class EchipaComponent {
  medici = [
    {
      nume: 'Dr. Popa Adrian',
      specializare: 'Medic specialist Cardiologie',
      imagine: 'assets/Pictures/doctor-popa.jpg',
      descriere:
        'Medic Primar Cardiolog, cu competenta in ecocardiografie, Atestat de Studii complementare in stimulatoare si defibrilatoare cardiace implantabile si cardiologie interventionala.',
    },

    {
      nume: 'Dr. Debora Bianca',
      specializare: 'Medic specialist Pneumologie',
      imagine: 'assets/Pictures/doctor-debora.jpg',
      descriere:
        'Medic Primar Cardiolog, cu competenta in ecocardiografie, Atestat de Studii complementare in stimulatoare si defibrilatoare cardiace implantabile si cardiologie interventionala.',
    },

    {
      nume: 'Dr. Aurelius Andrei',
      specializare: 'Medic Specialist Chirurgie generală',
      imagine: 'assets/Pictures/doctor-aurelius.jpg',
      descriere:
        'Medic Primar Cardiolog, cu competenta in ecocardiografie, Atestat de Studii complementare in stimulatoare si defibrilatoare cardiace implantabile si cardiologie interventionala.',
    },
  ];
}
