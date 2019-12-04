import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SocialNetwork} from '../../models/socialNerwork.models';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class SocialNetworkService {
  constructor(private http: HttpClient) { }

  getUserSocialNetwork(login: string): Observable<SocialNetwork[]> {
    return this.http.get(`${environment.apiUrl}/getAllSocialNetworks/for/user/${login}`).pipe(map
    ((socialNetworks: SocialNetwork[]) => socialNetworks));
  }
}
