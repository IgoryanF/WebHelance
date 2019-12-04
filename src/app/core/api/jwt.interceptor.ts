import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "./AuthenticationService";
import {Observable} from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
  constructor(private authService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.token) {
      const cloneRequest = req.clone({setHeaders: {Authorization: 'Bearer ' + currentUser.token}});
      return next.handle(cloneRequest);
    }

    return next.handle(req);
  }
}
