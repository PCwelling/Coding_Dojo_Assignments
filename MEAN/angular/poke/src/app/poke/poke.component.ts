import { Component, OnInit } from '@angular/core';
import { DataService } from "./../data.service";

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {
  pokemon: Array<any>

  constructor(private _dataService: DataService) {
    this.pokemon = [];  
   }

  getAllCurrent(){
    this.pokemon = this._dataService.getAllCurrent();
  }

  getpoke(){
    this._dataService.getpoke(()=>{
      this.getAllCurrent();
    })
  }

  ngOnInit() {
  }

}
