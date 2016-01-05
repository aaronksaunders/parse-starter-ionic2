var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('AuthService created.', http);
    }
    AuthService.prototype.login = function (user, password) {
        var headers = new http_1.Headers();
        headers.append('x-parse-application-id', '');
        headers.append('x-parse-rest-api-key', '');
        var params = new http_1.URLSearchParams();
        params.set('username', user);
        params.set('password', password);
        return this.http.get("https://api.parse.com/1/login", { headers: headers, search: params })
            .map(function (responseData) { return responseData.json(); });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.logout = function () {
        return localStorage.getItem('username');
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
