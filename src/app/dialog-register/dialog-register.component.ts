import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.css']
})
export class DialogRegisterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogRegisterComponent>,
    private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }

}
