import { SharedModule } from './../../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    ToDoComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToDoRoutingModule,
  ]
})
export class ToDoModule { }
