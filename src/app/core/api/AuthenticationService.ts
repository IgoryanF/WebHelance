import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private readonly tokenStorageKey = 'accessToken';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem(this.tokenStorageKey)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/authenticate`, { username, password }).pipe(map(
      (response: any) => {
        localStorage.setItem(this.tokenStorageKey, JSON.stringify(response));
        this.currentUserSubject.next(response);
        return response;
      }
    ));
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  logout() {
    localStorage.removeItem(this.tokenStorageKey);
    this.currentUserSubject.next(null);
    this.router.navigate(['/signIn']);
  }
}
