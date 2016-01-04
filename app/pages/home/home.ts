import {Page, NavController} from 'ionic-framework/ionic';
import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';
import {CreateAccountPage} from '../account/createAccount';
import {AuthService} from '../../services/AuthService';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  mainForm: ControlGroup;
  nav: NavController

  constructor(nav: NavController, fb: FormBuilder, public authService: AuthService) {
    this.nav = nav;
    this.mainForm = fb.group({
      username: [""],
      password: [""]
    });

    console.log("isLoggedIn", authService.isLoggedIn())
  }

  onSubmit(value): void {
    console.log('you submitted value: ', value);
    if (value) {
      this.authService.login(value.username, value.password);
    }
  }

  onCreateAccount(value): void {
    this.nav.push(CreateAccountPage, {});
  }
}
