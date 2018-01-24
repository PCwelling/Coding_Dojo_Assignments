import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: object

  constructor(private _dataService: DataService, ) { 
    this.note = {noteText: ""};
  }

  addNote(){
    //console.log('submit button works');
    this._dataService.addNote(this.note, (data)=>{
      console.log(data);
    })

  }

  ngOnInit() {
    this._dataService.noteObserver.subscribe(
      note => this.note = note
    );
    this._dataService.retrieveAll();
  }

}
