import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DataService {
  pokemon: Array<any>

  constructor(private _http:Http) { 
    this.pokemon = []
  }
  getAllCurrent(){
    return this.pokemon;
  }

  getpoke(callback){
    var randomNumber = Math.floor(Math.random()* 151 +1);
    this._http.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).subscribe((res)=>{
      callback(this.pokemon.push(res.json())
    })
    
  }

}
