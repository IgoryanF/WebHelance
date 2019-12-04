import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {AuthenticationService} from './core/api/AuthenticationService';
import {AddSocialNetworkComponent} from "./add-social-network/add-social-network.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'helance';
  modalRef: BsModalRef;
  login: any;

  constructor(private modalService: BsModalService, private router: Router, private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(
      data => {
        if (data) {
          this.login = data.username;
        }
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  ngOnInit(): void {
  }

  exit() {
    this.authService.logout();
    this.modalRef.hide();
  }
  noExit() {
    this.modalRef.hide();
  }
  noActiveNavigation(): boolean {
    return location.pathname === '/signIn';
  }
  openSocialNetworkAddModal() {
    this.modalRef = this.modalService.show(AddSocialNetworkComponent);
  }
}
