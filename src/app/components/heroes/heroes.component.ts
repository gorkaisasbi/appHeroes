import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
export interface Heroe{
  id:number,
  nombre: string,
  bio: string,
  img: string,
  aparicion: string,
  casa:string
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {


  public heroes: Heroe[] = [];

  constructor( private _heroesService : HeroesService) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

  }

}
