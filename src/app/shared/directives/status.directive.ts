import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[status]'
})
export class StatusDirective implements OnInit {

  @Input()
  status!: boolean;
  constructor(private _elemento: ElementRef) { }

  ngOnInit(): void {
    this.mudarFundo();
  }

  private mudarFundo() {
    if (this.status) {
      // this._elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
      this._elemento.nativeElement.style.color = "black";

    } else {
      this._elemento.nativeElement.style.color = "white";

    }
  }
}
