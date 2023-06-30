import { Component } from '@angular/core';

interface Medici {
  nume: string;
  specializare: string;
  imagine: string;
  descriere: string;
}

@Component({
  selector: 'app-echipa',
  templateUrl: './echipa.component.html',
  styleUrls: ['./echipa.component.css'],
})
export class EchipaComponent {
  medici: Medici[] = [
    {
      nume: 'Dr. Popa Adrian',
      specializare: 'Medic Specialist Cardiologie',
      imagine: 'assets/Pictures/doctor-popa.jpg',
      descriere:
        'Medic Primar Cardiolog, cu competență în ecocardiografie, Atestat de Studii complementare în stimulatoare și defibrilatoare cardiace implantabile și cardiologie intervențională.',
    },

    {
      nume: 'Dr. Debora Bianca',
      specializare: 'Medic Specialist Pneumologie',
      imagine: 'assets/Pictures/doctor-debora.jpg',
      descriere:
        'Competență în explorări funcționale respiratorii speciale, supraspecializare în pneumologie pediatrică avansată, Cercetător științific grad III cu competențe științifice dotate în acest sens.',
    },

    {
      nume: 'Dr. Aurelius Andrei',
      specializare: 'Medic Specialist Chirurgie generală',
      imagine: 'assets/Pictures/doctor-aurelius.jpg',
      descriere:
        'Medic primar chirurgie generală, doctor în științe medicale, coordonator echipa chirurgie, șef cabinet chirurgie generală din ambulatoriu integrat în cadrul clinicii Millenium',
    },

    {
      nume: 'Dr. Luca Adriana',
      specializare: 'Medic Specialist Cardiologie',
      imagine: 'assets/Pictures/doctor-luca.jpg',
      descriere:
        'Tânără cardiolog specialist, medic secundar în numeroase intervenții și proceduri chirugicale precum: angioplastii coronariene, coronarografii, cateterisme cardiace, consult cardilogic',
    },

    {
      nume: 'Dr. Meka Cezar',
      specializare: 'Medic Specialist Oftalmologie',
      imagine: 'assets/Pictures/doctor-meka.jpg',
      descriere:
        'Medic specialist oftalmologie, Member of Romanian Society of Ophthalmology and National Society of Contactology, Member of Glaucoma National Society, Member of ESCRS ',
    },

    {
      nume: 'Dr. Marc Achim',
      specializare: 'Medic Specialist Stomatologie',
      imagine: 'assets/Pictures/doctor-marc.jpg',
      descriere:
        'Medic Specialist Stomatologie cu experiență în utilizarea laserului în procedurile de stomatologie generală, estetică dentară, în tratamentele stomatologice pentru copii și în Nuvola clear aligners.',
    },

    {
      nume: 'Dr. Iosif Anastasia',
      specializare: 'Medic Specialist Oftalmologie',
      imagine: 'assets/Pictures/doctor-iosif.jpg',
      descriere:
        'Medic specialist oftalmologie, Member of Romanian Society of Ophthalmology and National Society of Contactology, Member of Glaucoma National Society, Member of ESCRS ',
    },

    {
      nume: 'Dr. Popescu Florentin',
      specializare: 'Medic Specialist Cardiologie',
      imagine: 'assets/Pictures/doctor-popescu.jpg',
      descriere:
        'Medic specialist Cardiolog, cu competență în ecocardiografie, Atestat de Studii complementare în stimulatoare și defibrilatoare cardiace implantabile și cardiologie intervențională.',
    },

    {
      nume: 'Dr. Nedelcu Alexandru',
      specializare: 'Medic Specialist Radiologie',
      imagine: 'assets/Pictures/doctor-nedelcu.jpg',
      descriere:
        'Medic specialist radiolog, specialist specialitatea Radiologie Imagistica Medicala, șef de Lucrări în cadrul Disciplinei de Anatomie, în Departamentul de Științe Morfologice din cadrul clinicii Millenium.  ',
    },
  ];
}
