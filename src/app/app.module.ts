import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SingInComponent} from './sing-in/sing-in.component';
import {MainPageComponent} from './main-page/main-page.component';
import {HttpClientModule} from '@angular/common/http';
import {TasksComponent} from './dashboard/tasks/tasks.component';
import { }


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'signIn', component: SingInComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SingInComponent,
    MainPageComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
