import { Injectable } from '@angular/core';
import {User} from '../../models/user.models';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.apiUrl}getallusers`).pipe(map((users: any[]) => users));
  }
  findUserByEmailAndPassword(email: string, password: string) {
    return this.users.filter(user => user.email === email && user.password === password)[0];
  }
  findUserByEmail(email: string) {
    return this.users.filter(user => user.email === email)[0];
  }
  findUserByPassword(password: string) {
    return this.users.filter(user => password === user.password)[0];
  }
}


