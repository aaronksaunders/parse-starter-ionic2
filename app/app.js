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
var home_1 = require('./pages/home/home');
var AuthService_1 = require('./services/AuthService');
var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.initializeApp();
        this.root = home_1.HomePage;
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            console.log('Platform ready');
        });
    };
    MyApp = __decorate([
        ionic_1.App({
            template: "\n    <ion-nav [root]=\"root\"></ion-nav>\n    <ion-overlay></ion-overlay>\n  ",
            providers: [AuthService_1.AuthService]
        }), 
        __metadata('design:paramtypes', [ionic_1.Platform])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
