import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 
  constructor( private http: HttpClient) { }

    getPokemons(){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=898`);
   
  }

    getMoreData(name: string) {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`); 
   }

  
}

