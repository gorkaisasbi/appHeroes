import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private routes: Router) {
  }

  ngOnInit() {
  }

  buscarHeroe(txt: string){
    this.routes.navigate(['/buscar',txt])
  }

}
