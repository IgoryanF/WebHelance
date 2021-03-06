import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {UsersService} from '../core/api/users.service';
import {Router} from '@angular/router';
import {User} from '../models/user.models';
import {RegistrationService} from '../core/api/registration.service';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  public signUpForm: FormGroup;
  submitted = false;
  loginFlag = true;
  loading = false;
  user: User = new User();

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router,
              private registrationService: RegistrationService) {
  }


  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      login: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.minLength(6), Validators.required]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.minLength(8), Validators.required]],
        repeatPassword: ['', [Validators.required]]
      }, {validators: checkPasswordsValidator})
    });
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get login() {
    return this.signUpForm.get('login');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get password() {
    return this.signUpForm.get('passwordGroup').get('password');
  }

  get passwordGroup() {
    return this.signUpForm.get('passwordGroup');
  }
  public async addUser(user: User) {
    this.submitted = true;
    if (this.signUpForm.valid) {
      this.loading = true;
      this.registrationService.register(user).pipe(first()).subscribe(users => {
        console.log('Добавился' + users);
        this.router.navigate(['/signIn']);
        },
        error => {
        this.loginFlag = false;
        this.loading = false;
        });
    }
  }
}

export const checkPasswordsValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');

  return password && repeatPassword && password.value === repeatPassword.value ? null : { checkedPasswords: true };
};


