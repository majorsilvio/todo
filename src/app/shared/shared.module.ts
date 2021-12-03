import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    TableComponent
  ]
})
export class SharedModule { }
