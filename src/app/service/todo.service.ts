import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl:string = 'http://localhost:3000/todo'
  
  constructor(private request: HttpClient) {
    
   }

   add(todo:Todo){
     return this.request.post(this.baseUrl,todo);
   }

   edit(todo:Todo){
     return this.request.put(`${this.baseUrl}/${todo.id}`,todo)
   }

   get(index:number){
     return this.request.get<any>(`${this.baseUrl}/${index}`)
   }

   getAll(){
     return this.request.get<any>(this.baseUrl);
   }

   remove(index:number){
     return this.request.delete<any>(`${this.baseUrl}/${index}`);
   }
}
