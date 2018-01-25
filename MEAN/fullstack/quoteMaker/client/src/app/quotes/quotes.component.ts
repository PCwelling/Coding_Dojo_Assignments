import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: object;
  user: object;
  //errorMsg : string ="";
  allquotes;

  constructor(private _dataService: DataService, private _router:Router) { 
    this.user = {name: ''},
    this.quote = {quote: ''},
    this.allquotes = []
  }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.user = data.user
      if(!this.user){
        this._router.navigate(['/'])
      }
    })
  }

  addQuote(){
      this._dataService.addQuote(this.quote, (data)=>{
        this.allquotes.push(data.quote)
        //console.log(data);
      })
  }

  showQuotes(){
    this._dataService.showQuotes(this.allquotes, (data)=>{
      this.allquotes = data
      //console.log(this.allquotes)
    })
  }
  onDelete(id, idx){
    this._dataService.onDelete(id, ()=>{
      console.log('deleted')
    })
  }

  onLike(id, idx){
    this._dataService.onLike(id, (data)=>{
      this.quote[idx] = data;
    })
  }

//   displayQuotes(){
//     this._dataService.showQuotes(this.allquotes, (data)=>{
//       this.allquotes = data    
//   })
// }

  ngOnInit() {
    this.checkSession();
    this.showQuotes();
  }

}
