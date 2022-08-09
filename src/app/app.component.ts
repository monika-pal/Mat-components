import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SideDialogComponent } from './form-elements/side-dialog/side-dialog.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-reusable-components';

  constructor(public dialog: NgDialogAnimationService) {}

  opensidedialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(SideDialogComponent, {
      width: '400px',
      height:'100%',
      position:{right:'0'},
      panelClass:'rightsidedialog',
      animation: { to: 'left',
      incomingOptions: {
            keyframeAnimationOptions: { duration: 200 }
          },
      outgoingOptions: {
        keyframeAnimationOptions: { duration: 300 }
          }
       },
       
      // enterAnimationDuration,
      // exitAnimationDuration,

    });

  }
}
