import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasksObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  retrieveAll() {
    this._http.get('/tasks').subscribe(
      tasks => this.tasksObserver.next(tasks.json()),
      errorResponse => console.log(errorResponse)
    );
  }

  createTask(task: Task) {
    this._http.post('/tasks', task).subscribe(
      response => this.retrieveAll(),
      errorResponse => console.log(errorResponse)
    );
  }

}
