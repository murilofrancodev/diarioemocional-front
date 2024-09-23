import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string },
    private dialogRef: MatDialogRef<MessageDialogComponent> 
  ) {}

  close() {
    this.dialogRef.close(); 
  }
}