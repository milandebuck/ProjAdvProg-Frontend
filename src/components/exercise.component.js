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
// exercise.component.ts
var core_1 = require('@angular/core');
var entry_service_1 = require('./../services/entry.service');
var loading_indicator_1 = require("./loading-indicator/loading-indicator");
var ExerciseComponent = (function (_super) {
    __extends(ExerciseComponent, _super);
    function ExerciseComponent(entryService) {
        _super.call(this, true);
        this.entryService = entryService;
        this.languages = ["NL-EN", "EN-NL"];
        this.lenght = 10;
        this.count = 0;
        this.i = 0;
        this.answers = [];
        this.ready();
    }
    ;
    ExerciseComponent.prototype.ngOnInit = function () {
        console.log('initializing..');
        this.setup = true;
    };
    ExerciseComponent.prototype.startExercise = function (amount, language) {
        this.standby();
        this.curlangs = language.selected;
        this.setup = false;
        this.entries = this.getEntries(amount.value);
    };
    ExerciseComponent.prototype.getEntries = function (amount) {
        var _this = this;
        this.entryService.getEntries(amount)
            .subscribe(function (entries) {
            _this.entries = entries;
            _this.curEntry = entries[0];
            _this.ready();
            console.log("got the entries");
        }, function (error) { return _this.error = error; });
    };
    ExerciseComponent.prototype.next = function (answer) {
        if (this.count < this.entries.length) {
            this.count++;
            this.answers.push(answer);
            this.curEntry = this.entries[this.count];
        }
        else {
            alert('test completed');
        }
    };
    ExerciseComponent.prototype.getScore = function () {
        console.log("button stop");
        console.log(this.entryService.getScore(this.answers));
    };
    ExerciseComponent.prototype.correctExercise = function () {
    };
    ExerciseComponent = __decorate([
        core_1.Component({
            selector: 'exercise',
            template: require('./templates/exercise.component.html'),
            styles: [require('./styles/exercise.component.css')],
            directives: [loading_indicator_1.LoadingIndicator]
        }), 
        __metadata('design:paramtypes', [entry_service_1.EntryService])
    ], ExerciseComponent);
    return ExerciseComponent;
}(loading_indicator_1.LoadingPage));
exports.ExerciseComponent = ExerciseComponent;
//# sourceMappingURL=exercise.component.js.map