import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogProgramareComponent } from 'src/app/dialog-programare/dialog-programare.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  buttonDisabled = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogProgramareComponent);
  }
}
