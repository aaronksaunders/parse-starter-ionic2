import {Injectable, provide} from 'angular2/core';
import { Http, Response, Request, URLSearchParams, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(public http: Http) {
    console.log('AuthService created.', http);
  }
  /**
  *
  */
  login(user: string, password: string) {

    var headers = new Headers();
    headers.append('x-parse-application-id', '');
    headers.append('x-parse-rest-api-key', '');

    let params = new URLSearchParams();
    params.set('username', user);
    params.set('password', password);

    // return an observable
    return this.http.get("https://api.parse.com/1/login", { headers: headers, search: params })
      .map((responseData) => responseData.json());
  }
  isLoggedIn(): any {
    return this.getUser() !== null;
  }
  getUser(): any {
    return localStorage.getItem('username');
  }
  logout(): any {
    return localStorage.getItem('username');
  }
}
