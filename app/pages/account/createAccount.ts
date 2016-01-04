import {Page, NavController} from 'ionic-framework/ionic';
import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';

@Page({
  templateUrl: 'build/pages/account/createAccount.html',
})
export class CreateAccountPage {
  mainForm: ControlGroup;
  nav: NavController

  constructor(nav: NavController, fb: FormBuilder) {
    this.nav = nav;
    this.mainForm = fb.group({
      firstName: [""],
      lastName: [""],
      username: [""],
      password: [""]
    });
  }

  onSubmit(value): void {
    console.log('you submitted value: ', value);
  }


  onCancel(): void {
    console.log('you clicked cancel');
    this.nav.pop();
  }


}
