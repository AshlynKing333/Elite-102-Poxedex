import { Component, Input, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  displaypokemons: any[] = [];
  private searchSubscription: Subscription;
  @Input() search: Observable<string>;

  constructor(
    private dataService: DataService
  ) { }

ngOnInit(): void {
     this.dataService.getPokemons()
       .subscribe((response: any) => {
         response.results.forEach(result => {
           this.dataService.getMoreData(result.name)
             .subscribe((uniqResponse: any) => {
               this.pokemons.push(uniqResponse);
               this.pokemons.sort((a, b) => a.id - b.id)
               this.displaypokemons = this.pokemons
             });
         });
       });
       this.searchSubscription = this.search.subscribe((word) => this.searchThis(word)); 
   }        
searchThis(word) {
  this.displaypokemons = this.pokemons.filter((ele, i, array) =>{
    return ele.name.includes(word)
  })
}
  }
  
  

