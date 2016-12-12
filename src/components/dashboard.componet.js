"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var score_service_1 = require('../services/score.service');
var user_service_1 = require('../services/user.service');
var loading_indicator_1 = require("./loading-indicator/loading-indicator");
var router_1 = require('@angular/router');
var DashboardComponent = (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(scoreService, userService, router) {
        _super.call(this, true);
        this.scoreService = scoreService;
        this.userService = userService;
        this.router = router;
        this.labels = [];
        this.ChartType = 'line';
        this.ChartLegend = true;
        this.username = localStorage.getItem('username');
        this.ready();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.graphdata = [];
        this.items = [];
        console.log(this.userService.isLoggedIn());
        this.standby();
        this.scoreService.getScores().subscribe(function (data) {
            console.log('executing');
            _this.processData(data);
            console.log(_this.graphdata);
            _this.ready();
        }, function (error) { return _this.error = error; });
    };
    DashboardComponent.prototype.startNew = function () {
        this.router.navigate(['Exercise']);
    };
    DashboardComponent.prototype.processData = function (data) {
        var _this = this;
        var max = 0;
        data.map(function (i) {
            console.log(i);
            var data;
            data = [];
            var item;
            item = {};
            item.title = i.translations;
            item.completed = 0;
            var total = 0;
            var totalscore = 0;
            //needed for labals
            if (i.tests.length > max)
                max = i.tests.length;
            //process testdata + calculate avg
            i.tests.map(function (test) {
                console.log('processing data');
                item.completed++;
                total += test.max;
                totalscore += test.score;
                data.push(test.score);
            });
            item.avarage = Math.round((totalscore / total) * 1000) / 100;
            _this.graphdata.push({ data: data, label: item.title });
            _this.items.push(item);
        });
        //fill labels array
        while (this.labels.length < max)
            this.labels.push(this.labels.length);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: require('./templates/dashboard.component.html'),
            styles: [require('./styles/app.component.css'), require('./styles/dashboard.component.css')]
        }), 
        __metadata('design:paramtypes', [score_service_1.ScoreService, user_service_1.UserService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}(loading_indicator_1.LoadingPage));
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.componet.js.map