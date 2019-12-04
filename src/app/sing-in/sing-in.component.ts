import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from "../core/api/AuthenticationService";


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})

export class SingInComponent implements OnInit {

  public signInForm: FormGroup;
  // @ViewChild('idEmail', {static: false})
  // element: ElementRef;
  submitted = false;
  flag = true;
  loading = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.signInForm.controls;
  }

  authenticate() {
    this.submitted = true;
    if (this.signInForm.valid) {
      this.loading = true;
      this.authService.login(this.f.username.value, this.f.password.value).subscribe(response => {
        this.onAccess();
      },
          () => {
        this.flag = false;
        this.loading = false;
      });
    }
  }

  private onAccess() {
    this.router.navigate(['/home']);
  }

}
