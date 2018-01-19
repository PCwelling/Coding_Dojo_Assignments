import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  AlphaNumbers: number [] = [];
  BetaNumbers: number []= [];
  gamma: number = 0;

  constructor() { }

  retrieveNumbersAlpha(): number[]{
    return this.AlphaNumbers;
  }

  addNumberAlpha(num: number){
    this.AlphaNumbers.push(num);
  }

  sumAlpha(): number{
    let sum = 0;
    for(let num of this.AlphaNumbers){
      sum = sum += num;
    }
    return sum;
  }

  retrieveNumbersBeta(): number[]{
    return this.BetaNumbers;
  }

  addNumberBeta(num: number){
    this.BetaNumbers.push(num);
  }
  sumBeta(): number{
    let sum = 0;
    for(let num of this.BetaNumbers){
      sum = sum += num;
    }
    return sum;
  }

  sumGamma(): number{
    return this.sumAlpha() - this.sumBeta();
  }

}
