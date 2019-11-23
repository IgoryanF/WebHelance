import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../../models/task.models';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }
  getAllTasks(): Observable<Task[]> {
    return this.http.get(`${environment.apiUrl}/getAllTasks`).pipe(map((tasks: any[]) => tasks));
  }
  getCountTasks(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/getCountTasks`).pipe(map((count: any) => count));
  }
}
