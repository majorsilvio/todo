import { SharedModule } from './../../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';


@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToDoRoutingModule,
  ]
})
export class ToDoModule { }
