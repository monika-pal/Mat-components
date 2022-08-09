import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormElementsRoutingModule } from './form-elements-routing.module';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../material-module';
import { ButtonsComponent } from './buttons/buttons.component';
import { SideDialogComponent } from './side-dialog/side-dialog.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TablesComponent } from './tables/tables.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';


@NgModule({
  declarations: [
    InputComponent,
    ButtonsComponent,
    SideDialogComponent,
    DropdownComponent,
    TablesComponent,
    SlidetoggleComponent,
  ],
  imports: [
    CommonModule,
    FormElementsRoutingModule,
    MaterialModule
  ],
  providers:[SideDialogComponent],
  entryComponents:[SideDialogComponent]
})
export class FormElementsModule { }
