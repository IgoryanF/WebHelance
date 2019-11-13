import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../../models/user.models';
import {Observable, of, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UsersService} from './users.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class RegistrationService {
  usersArray: User[] = [];
  constructor(private http: HttpClient, private userService: UsersService) { }
  public register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}registeredUser`, user).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
        console.log('Данный логин занят');
      }
      return throwError(error);
    }));
  }
  // findByLogin(login: string) {
  //   this.userService.getUsers().subscribe((users: User[]) => users.map((us: User) => this.usersArray.push(us)));
  //   return this.usersArray.find(user => user.login === login);
  // }
}
