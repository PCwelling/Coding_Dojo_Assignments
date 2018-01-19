import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  gamma: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.gamma = this._dataService.sumGamma();
  }

  difference(){
    this.gamma = this._dataService.sumGamma();
  }

}
