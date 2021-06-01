import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

// import {PokemonListComponent} from '../services/pokemon-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchword = ""
  constructor(private http: HttpClient) { }

  searchThis() {
    this.Pokemonsearch.next(this.searchword)
  }

   Pokemonsearch: Subject<string> = new Subject<string>();

}
