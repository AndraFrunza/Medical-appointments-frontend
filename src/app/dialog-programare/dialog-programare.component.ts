import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-programare',
  templateUrl: './dialog-programare.component.html',
  styleUrls: ['./dialog-programare.component.css'],
})
export class DialogProgramareComponent {
  constructor(private dialogRef: MatDialogRef<DialogProgramareComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
