import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../core/api/AuthenticationService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-add-social-network',
  templateUrl: './add-social-network.component.html',
  styleUrls: ['./add-social-network.component.scss']
})
export class AddSocialNetworkComponent implements OnInit {

  telegramForm: FormGroup;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private bsModalRef: BsModalRef) {
  }

  ngOnInit() {
    this.telegramForm = this.formBuilder.group({
      modalFormTelegram: ['', [Validators.required]]
    });
  }

  get modalFormTelegram() {
    return this.telegramForm.get('modalFormTelegram');
  }
}
