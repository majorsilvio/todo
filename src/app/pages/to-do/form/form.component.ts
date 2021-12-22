import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  todo: Todo | undefined = undefined;
  isEdit = false;
  

  constructor(private location:Location,private formBuilder : FormBuilder, private service: TodoService,private router: Router, private activatedRoute: ActivatedRoute ) { 

    this.formGroup = this.formBuilder.group({
      title: [null,[Validators.required]],
      description:[null],
      status:[null]
    })
  }

  ngOnInit(): void {
    this.verifyIfIsEdit()
  }

  verifyIfIsEdit(){
    this.todo = this.location.getState() as Todo;
    if(this.todo.id){
      this.isEdit = true;
      this.formGroup.patchValue(this.todo);
    }else{
      this.router.navigate(['/novo'],{relativeTo: this.activatedRoute});
    }
  }
  save(){
    if(this.todo?.id){
      this.service.edit({...this.formGroup.getRawValue(),id:this.todo.id}).subscribe()
    }
    else{
      this.service.add({...this.formGroup.getRawValue(),status:false}).subscribe();
    }
    this.backToList();  
  }

  backToList(){
    this.router.navigate(['/'],{relativeTo: this.activatedRoute});
  }

}
