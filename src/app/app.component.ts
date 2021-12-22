
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular basics';

  constructor( private router: Router, private activatedRoute: ActivatedRoute ){}

  sair(){
    console.log('saiu')
  }

  novo(){
    this.router.navigate(['/novo'],{relativeTo: this.activatedRoute});
  }
  home(){
    this.router.navigate(['/'],{relativeTo: this.activatedRoute});
  }
}
