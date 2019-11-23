import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../../models/user.models';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient, private router: Router) { }
  public register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/registeredUser`, user).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 400) {
        console.log('Данный логин занят');
      }
      return throwError(error);
    }));
  }
}
