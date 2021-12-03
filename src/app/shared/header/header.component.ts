import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  private _title: any;
  @Output() novo = new EventEmitter();
  @Output() sair = new EventEmitter();

  get title(): any {
      return this._title;
  }

  @Input()
  set title(value: any) {
      this._title = value;
  }

  emitNovo(){
    this.novo.emit();
  }
   
  emitSair():any{
    this.sair.emit();
  }
}
