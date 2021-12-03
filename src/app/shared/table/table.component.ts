import { HeadCell } from './../../models/head-cell.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  viwerData:any[] | undefined;
  page:number = 1;
  maxPage: any;
  total: number | undefined;
  constructor() { }
  @Input() itemsPerPage = 5;
  @Input() headCells:Array<string> = [];
  @Input() data:any[] | undefined;
  @Input() identifier:any = -1;

  @Output() onClickExcluir = new EventEmitter()
  @Output() onClickEditar = new EventEmitter()

  ngOnInit(): void {
    //type peageable
    this.setViwerData();
  } 
  

  get initialItem(){
    return (this.itemsPerPage * this.page) - this.itemsPerPage
  }

  setViwerData(){
    this.viwerData = this.data?.slice(this.initialItem,this.itemsPerPage * this.page);
    this.total = this.data?.length;
    this.maxPage = this.total ?  Math.round(this.total / this.itemsPerPage) : 0;
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
    this.onClickExcluir.emit(identifier)
  }

}
