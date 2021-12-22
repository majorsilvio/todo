import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { StatusDirective } from './directives/status.directive';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TableComponent,
    StatusDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  exports:[
    HeaderComponent,
    TableComponent,
    ReactiveFormsModule,
    MatInputModule,
    ButtonComponent,
    MatRadioModule
  ]
})
export class SharedModule { }
