import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  addNote(note, callback){
    console.log('in data service')
    this._http.post('/addNote', note).subscribe((res)=>{
      //console.log("post route inside dataservice", res.json());
      callback(res.json());
    })
  }
}
