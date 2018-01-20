import { Component, OnInit } from '@angular/core';
import { DataService} from './../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city_data;
  temps;

  constructor(private _route: ActivatedRoute, private _dataService: DataService) {
    this._route.paramMap.subscribe(params =>{
      _dataService.getwx(params.get('city'),(data)=> {this.city_data = data;
      console.log(this.city_data);
    this.temps = this.convertMany([this.city_data.main.temp, this.city_data.main.temp_max, this.city_data.main.temp_min])
    });
    });
  }
  convertMany(Ks){
    for(let i=0; i<Ks.length; i++){
      Ks[i] = Math.round((1.8 * (Ks[i] - 273) + 32)*100)/100;
    }
    return Ks;
  }
  
  ngOnInit() {
  }

}
