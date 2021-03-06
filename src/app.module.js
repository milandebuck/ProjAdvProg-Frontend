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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var GlobalEventsManager_1 = require('./GlobalEventsManager');
var components_1 = require('./components');
var app_routes_1 = require('./app.routes');
//services
var services_1 = require('./services');
var class_component_1 = require("./components/class.component");
var livesearch_component_1 = require("./components/livesearch/livesearch.component");
var class_service_1 = require("./services/class.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [components_1.AppComponent],
            declarations: [
                components_1.AppComponent,
                components_1.LoginComponent,
                components_1.ExerciseComponent,
                components_1.LoadingIndicator,
                components_1.RegisterComponent,
                components_1.DashboardComponent,
                components_1.NavComponent,
                class_component_1.ClassComponent,
                livesearch_component_1.LiveSearch
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                http_1.JsonpModule,
                ng2_charts_1.ChartsModule
            ],
            providers: [
                services_1.UserService,
                services_1.LoggedInGuard,
                services_1.EntryService,
                services_1.CookieService,
                services_1.ExtractService,
                services_1.ScoreService,
                class_service_1.ClassService,
                services_1.SearchService,
                GlobalEventsManager_1.GlobalEventsManager
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map