"use strict";
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
var HomePage = (function () {
    function HomePage(nav, fb) {
        this.nav = nav;
        this.mainForm = fb.group({
            username: [""],
            password: [""]
        });
    }
    HomePage.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    HomePage.prototype.onCreateAccount = function (value) {
        this.nav.push(createAccount_1.CreateAccountPage);
    };
    HomePage = __decorate([
        ionic_1.Page({
            templateUrl: 'build/pages/home/home.html',
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, common_1.FormBuilder])
    ], HomePage);
    return HomePage;
})();
exports.HomePage = HomePage;
