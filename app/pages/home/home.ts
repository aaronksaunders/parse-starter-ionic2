import {Page, NavController} from 'ionic-framework/ionic';
import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';
import {CreateAccountPage} from '../account/createAccount';


@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  mainForm: ControlGroup;
  nav: NavController

  constructor(nav: NavController, fb: FormBuilder) {
    this.nav = nav;
    this.mainForm = fb.group({
      username: [""],
      password: [""]
    });
  }

  onSubmit(value): void {
    console.log('you submitted value: ', value);
  }

  onCreateAccount(value): void {
    this.nav.push(CreateAccountPage);
  }
}
