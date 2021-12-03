import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() name = 'Button';
  @Output() onClick = new EventEmitter<MouseEvent>();

  click(event: MouseEvent | undefined){ 
    this.onClick.emit(event)
  }


}
