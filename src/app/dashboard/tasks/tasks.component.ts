import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../core/api/tasks.service';
import {Task} from '../../models/task.models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasksArray: Task[] = [];
  count = 0;
  subject: string;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getAllTasks().subscribe((tasks: Task[]) => this.tasksArray = tasks);
    this.tasksService.getCountTasks().subscribe((count: any) => this.count = count);
  }
  public throwOffFilter() {
    this.subject = '';
  }

}
