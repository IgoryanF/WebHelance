import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../core/api/tasks.service";
import {ActivatedRoute} from "@angular/router";
import {Task} from "../../models/task.models";
import {PageChangedEvent} from "ngx-bootstrap";
import {AuthenticationService} from "../../core/api/AuthenticationService";

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
  returnUserTasks: Task[] = [];
  userTasks: Task[] = [];

  constructor(private tasksService: TasksService, private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    const login = this.route.snapshot.paramMap.get('login');
    this.tasksService.getAllUserTasks(login).subscribe((tasks: Task[]) => {
      this.userTasks = tasks;
      this.returnUserTasks = this.userTasks.slice(0, 10);
    });
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnUserTasks = this.userTasks.slice(startItem, endItem);
  }
}
