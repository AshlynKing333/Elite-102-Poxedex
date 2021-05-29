import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchword = ""
  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=10")
  }
  
  @Output() searchcriteria = new EventEmitter<String>();
  searchThis() {
    this.searchcriteria.emit(this.searchword)
}
}
