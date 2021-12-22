import { HeadCell } from './../../models/head-cell.model';
import { Component, Input, OnInit, Output, EventEmitter, AfterViewChecked, AfterViewInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentChecked, OnDestroy{

  viwerData:any[] | undefined;
  page:number = 1;
  maxPage: any;
  total?: number;
  constructor() { }
  @Input() itemsPerPage = 10;
  @Input() headCells:Array<string> = [];
  @Input() data:any[] | undefined | null;

  @Output() onClickExcluir = new EventEmitter()
  @Output() onClickEditar = new EventEmitter()

  ngAfterContentChecked(): void {
    this.setViwerData();    
  }

  ngOnDestroy(): void {
    this.data = undefined;
    this.viwerData = undefined;
  }

  get initialItem(){
    return (this.itemsPerPage * this.page) - this.itemsPerPage
  }

  setViwerData(){
    this.viwerData = this.data?.slice(this.initialItem,this.itemsPerPage * this.page);
    this.total = this.data?.length;
    this.maxPage = this.total ?  Math.ceil(this.total / this.itemsPerPage) : 1;
  }


  next(){
    if(this.page < this.maxPage){
      this.page++;
      this.setViwerData();
    }
  }

  preview(){
    if(this.page > 1){
      this.page--;
      this.setViwerData();
    }
  }
  emitExcluir(identifier:any){
    this.onClickExcluir.emit(identifier)
  }

  
  emitEditar(identifier:any){
    this.onClickEditar.emit(identifier)
  }

}
