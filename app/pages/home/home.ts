import {Page, NavController} from 'ionic-framework/ionic';
import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';
import {CreateAccountPage} from '../account/createAccount';
import {AuthService} from '../../services/AuthService';
import {Observable} from 'rxjs/Observable';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  mainForm: ControlGroup
  nav: NavController
  user: any
  err: any

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
      this.authService.login(value.username, value.password)
        .subscribe(
           data => {
             this.user = data;
             this.err = undefined;
             // here is where you navigate to next page
           },
           err => this.err = "ERROR " + JSON.parse(err._body).error,
           () => console.log('User Login Success')
        );
    }
  }

  onCreateAccount(value): void {
    this.nav.push(CreateAccountPage, {});
  }
}
