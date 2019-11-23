import {Task} from './task.models';

export class User {
  id: any;
  email: string;
  user_login: string;
  name: string;
  password: string;
  tasks: Task[];

}
