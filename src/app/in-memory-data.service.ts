import { Injectable } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import {InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    {id:12, name:'Dr Nice'},
    {id:13, name:'Dr Amir'},
    {id:14, name:'Dr Adil'},
    {id:15, name:'Dr Hamza'},
    {id:16, name:'Dr Subhan'},
    {id:17, name:'Dr Usman'},
    {id:18, name:'Dr Ali'},
    {id:19, name:'Dr Ahamd'},
    {id:20, name:'Dr Gul'},
    ]
    return {heroes}
  }
  genId(heroes : Hero[]):number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
