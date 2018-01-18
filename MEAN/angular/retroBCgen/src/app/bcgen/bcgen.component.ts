import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bcgen',
  templateUrl: './bcgen.component.html',
  styleUrls: ['./bcgen.component.css']
})
export class BcgenComponent implements OnInit {
  // colors: Array<string>
  // numbers: Array<number>

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  colors = this.getRandomColor;
  
 getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // constructor() { 

  // }

  // ngOnInit() {
  // }

}
