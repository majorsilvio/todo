import { HeadCell } from './../../models/head-cell.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/service/todo.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnDestroy,OnInit {

  constructor(private service : TodoService,private router: Router, private activatedRoute: ActivatedRoute) { }

  headCells = [
    'title',
    'description',
    'Actions'
  ]

  data$: Observable<Todo[]> | undefined;

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.data$ = undefined
  }

  getData(){
    this.data$ = this.service.getAll();
  }


  remove(item:Todo){
    this.service.remove(item.id).subscribe();
    this.getData();
  }

  editar(item:Todo){
    this.router.navigate(["/editar"],{relativeTo: this.activatedRoute,state: item})
  }

}
