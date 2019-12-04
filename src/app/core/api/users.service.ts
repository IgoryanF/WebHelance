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
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.apiUrl}/getallusers`).pipe(map((users: any[]) => users));
  }

}


