import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  displaypokemons: any[] = [];

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
              
            });
        });
        this.pokemons.sort((a, b) => a.id - b.id)

       this.displaypokemons = this.pokemons
      });
        
  }        

  
  onSearchChange(e) {
    let value =e.detail.value;

    if (value == '') {
      this.displaypokemons;
      return;
    }
    
    this.dataService.findPokemon(value).subscribe(res => {
      this.pokemons =[res];
    }, err => {
      this.pokemons = [];
    })
  }

}
  

