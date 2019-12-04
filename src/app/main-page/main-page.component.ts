import { Component, OnInit } from '@angular/core';
import {UsersService} from '../core/api/users.service';
import {User} from '../models/user.models';
import {Task} from '../models/task.models';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

}
