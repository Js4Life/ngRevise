import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public taskList:Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskList.push(new Task())
  }

  removeTask(index:number) {
    if(index > -1) {
      this.taskList.splice(index,1)
    }
  }

}
