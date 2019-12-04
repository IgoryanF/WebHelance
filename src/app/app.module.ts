import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SingInComponent} from './sing-in/sing-in.component';
import {MainPageComponent} from './main-page/main-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TasksComponent} from './dashboard/tasks/tasks.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ModalModule, PaginationModule, TooltipModule} from 'ngx-bootstrap';
import { MyTasksComponent } from './dashboard/my-tasks/my-tasks.component';
import {JwtInterceptor} from './core/api/jwt.interceptor';
import {ErrorInterceptor} from './core/api/error.interceptor';
import { AddSocialNetworkComponent } from './add-social-network/add-social-network.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'signIn', component: SingInComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/:login', component: MyTasksComponent},
  {path: 'addSocialNetwork' , component: AddSocialNetworkComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SingInComponent,
    MainPageComponent,
    TasksComponent,
    MyTasksComponent,
    AddSocialNetworkComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    PaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddSocialNetworkComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
