import { Component, OnInit, Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroApiService } from '../hero-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  allCharacters: Observable<any>;

  constructor(private heroService: HeroService, private svcHero: HeroApiService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.allCharacters = this.svcHero.getAllCharacter();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
