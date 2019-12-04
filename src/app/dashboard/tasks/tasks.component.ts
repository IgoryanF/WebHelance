import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../core/api/tasks.service';
import {Task} from '../../models/task.models';
import {PageChangedEvent} from 'ngx-bootstrap';
import {SocialNetworkService} from '../../core/api/socialNetwork.service';
import {SocialNetwork} from '../../models/socialNerwork.models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  returnTaskArray: Task[] = [];
  tasksArray: Task[] = [];
  login: any[] = [];
  subject: string;
  constructor(private tasksService: TasksService, private socialNetworkService: SocialNetworkService) { }

  ngOnInit() {
    this.tasksService.getAllTasks().subscribe((tasks: Task[]) => {
      this.tasksArray = tasks;
      this.returnTaskArray = this.tasksArray.slice(0, 10);
      tasks.map((task: Task) => this.tasksService.getUserLoginByTaskId(task.id).subscribe((login: any) => {
          this.login.push(login);
      }
      ));
    });
  }
  public throwOffFilter() {
    this.subject = '';
    this.ngOnInit();
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnTaskArray = this.tasksArray.slice(startItem, endItem);
  }

  getSocialNetwork(index: number) {
    this.socialNetworkService.getUserSocialNetwork(document.getElementsByClassName('login_user')[index].textContent)
      .subscribe((socialNetworksGet: SocialNetwork[]) => socialNetworksGet.map(
        (socialNetwork: SocialNetwork) => {
          if (socialNetwork.networkName === 'Telegram') {
            const linkUrl = 'https://telegram.me/'.concat(socialNetwork.networkLogin);
            window.open(linkUrl);
          }
        }));
  }

  taskFilter(subject: string) {
    this.tasksArray = [];
    this.returnTaskArray = [];

    this.tasksService.getAllTasks().subscribe((tasks: Task[]) => tasks.filter(task => {
      if (task.subject === subject) {
        this.tasksArray.push(task);
        this.returnTaskArray = this.tasksArray.slice(0, 10);
      }
    }));
  }
}
