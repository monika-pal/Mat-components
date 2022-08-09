import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputComponent } from './input/input.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path: '', redirectTo: '/inputtypes', pathMatch: 'full' },
  {path:'inputtypes', component:InputComponent },
  {path:'buttons', component:ButtonsComponent },
  {path:'dropdowns', component:DropdownComponent },
  {path:'tables', component:TablesComponent },
  {path:'slidetoggle', component:SlidetoggleComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { }
