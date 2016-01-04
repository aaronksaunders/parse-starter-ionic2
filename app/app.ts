import {App, Platform} from 'ionic-framework/ionic';
import {HomePage} from './pages/home/home';
import {AuthService} from './services/AuthService';


@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
    <ion-overlay></ion-overlay>
  `,
  providers: [AuthService]
})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
