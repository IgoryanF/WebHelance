import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../core/api/users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})

export class SingInComponent implements OnInit {

  public signInForm: FormGroup;
  @ViewChild('idEmail', {static: false})
  element: ElementRef;
  submitted = false;
  flag = true;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private route: Router) {
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.signInForm.controls;
  }
  // get email() {
  //   return this.signInForm.get('email');
  // }
  //
  // get password() {
  //   return this.signInForm.get('password');
  // }

  checkUser(form: FormGroup) {
    this.submitted = true;
    if (form.invalid) {
      console.log('Форма не валидна');
    } else {
      if (this.usersService.findUserByEmailAndPassword(this.f.email.value, this.f.password.value)) {
        console.log('Вы вошли в систему');
        this.route.navigate(['/home/']);
      } else {
        if (!this.usersService.findUserByEmail(this.f.email.value) || !this.usersService.findUserByPassword(this.f.password.value))  {
          this.flag = false;
        }
        console.log('Такого пользователя нет');
      }
    }
  }
}
