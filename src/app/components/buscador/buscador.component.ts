import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  public heroes: any[]=[];
  public termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService ) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.termino = params['txt'];
        this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

}
