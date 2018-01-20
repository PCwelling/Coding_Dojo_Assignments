import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class DataService {

  constructor(private _http:Http) { }
  weather = "";

  getwx(city, callback){
    var api_key ='5985f455f20d40ec03d9c67ecb6fbc67';
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${api_key}`).subscribe((res)=>{
      this.weather = res.json();  
      callback(this.weather)
    },
    (error)=> {console.log(error);
    callback("error")}
    )
  }
}
