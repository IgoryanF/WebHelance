import {Task} from './task.models';

export class User {
  id: number;
  email: string;
  login: string;
  name: string;
  password: string;
  taskArray: Task[];

  // constructor(email: string, login: string, name: string, password: string) {
  //   this.email = email;
  //   this.login = login;
  //   this.name = name;
  //   this.password = password;
  // }
}
