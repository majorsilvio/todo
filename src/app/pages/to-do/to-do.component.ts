import { HeadCell } from './../../models/head-cell.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  headCells = [
    'teste1',
    'teste2',
    'teste3',
    'Actions'
]

data: Array<any> = [
  {
  id:1,
  teste1:'teste1',
  teste2:'teste2',
  teste3:'teste2',
  },
  {
    id:2,
    teste1:'teste1',
    teste2:'teste2',
    teste3:'teste3',
  },
  {
    id:3,
    teste1:'teste1',
    teste2:'teste2',
    teste3:'teste3',
  },
  {
    id:3,
    teste1:'teste1',
    teste2:'teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2teste2',
    teste3:'teste4',
  },
  {
    id:3,
    teste1:'teste1',
    teste2:'teste2',
    teste3:'teste5',
  },
  {
    id:3,
    teste1:'teste1',
    teste2:'teste2',
    teste3:'teste6',
  },
  {
    id:3,
    teste1:'teste1',
    teste2:'teste2',
    teste3:'teste7',
  },
  {
    id:3,
    teste1:'teste1',
    teste2:'teste2',
    teste3:'teste8',
  }
]


log(t:any){
  console.log(t)
}

  ngOnInit(): void {
  }

}
