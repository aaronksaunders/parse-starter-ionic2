var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic-framework/ionic');
var common_1 = require('angular2/common');
var createAccount_1 = require('../account/createAccount');
var AuthService_1 = require('../../services/AuthService');
var HomePage = (function () {
    function HomePage(nav, fb, authService) {
        this.authService = authService;
        this.nav = nav;
        this.mainForm = fb.group({
            username: [""],
            password: [""]
        });
        console.log("isLoggedIn", authService.isLoggedIn());
    }
    HomePage.prototype.onSubmit = function (value) {
        var _this = this;
        console.log('you submitted value: ', value);
        if (value) {
            this.authService.login(value.username, value.password)
                .subscribe(function (data) {
                _this.user = data;
                _this.err = undefined;
            }, function (err) { return _this.err = "ERROR " + JSON.parse(err._body).error; }, function () { return console.log('User Login Success'); });
        }
    };
    HomePage.prototype.onCreateAccount = function (value) {
        this.nav.push(createAccount_1.CreateAccountPage, {});
    };
    HomePage = __decorate([
        ionic_1.Page({
            templateUrl: 'build/pages/home/home.html',
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, common_1.FormBuilder, AuthService_1.AuthService])
    ], HomePage);
    return HomePage;
})();
exports.HomePage = HomePage;
