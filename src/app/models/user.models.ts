import {Task} from './task.models';
import {SocialNetwork} from "./socialNerwork.models";

export class User {
  id: any;
  email: string;
  user_login: string;
  name: string;
  password: string;
  tasks: Task[];
  socialNetworks: SocialNetwork[];
}
