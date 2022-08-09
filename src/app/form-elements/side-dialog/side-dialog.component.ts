import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-side-dialog',
  templateUrl: './side-dialog.component.html',
  styleUrls: ['./side-dialog.component.scss']
})
export class SideDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SideDialogComponent>) { }

  ngOnInit(): void {
  }

}
