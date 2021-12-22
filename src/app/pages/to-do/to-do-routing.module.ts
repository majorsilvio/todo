import { ToDoComponent } from './to-do.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoComponent
  },
  {
    path: 'novo',
    component: FormComponent
  },
  {
    path: 'editar',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
