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
var loading_indicator_1 = require("./loading-indicator/loading-indicator");
var services_1 = require("./../services");
var ClassComponent = (function (_super) {
    __extends(ClassComponent, _super);
    function ClassComponent(classService) {
        _super.call(this, true);
        this.classService = classService;
        this.username = localStorage.getItem('username');
        this.teacher = true;
    }
    ClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.standby();
        this.classService.checkifTeacher().subscribe(function (data) {
            _this.teacher = data.teacher;
            console.log(_this.teacher);
        });
        this.classService.getClasses().subscribe(function (data) {
            _this.classes = data;
            console.log(_this.classes);
            _this.ready();
        });
        this.ready();
    };
    ClassComponent.prototype.viewDetails = function (c) {
        var _this = this;
        console.log(c);
        this.classService.getStudents(c.id).subscribe(function (students) {
            _this.students = students;
            _this.detail = c;
        });
        this.classService.getTests(c.id).subscribe(function (tests) { return _this.tests = tests; });
    };
    ClassComponent.prototype.addStudent = function (student) {
        if (!this.contains(student)) {
            this.newstudents.push(student.id);
        }
    };
    ClassComponent.prototype.contains = function (student) {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s === student)
                return true;
        }
        return false;
    };
    ClassComponent.prototype.addStudents = function () {
        this.classService.addStudent(this.newstudents, this.detail.id);
    };
    ClassComponent.prototype.addGroup = function (name) {
        var _this = this;
        this.classService.createClass(name).subscribe(function (data) { return _this.classService.getClasses().subscribe(function (data) {
            console.log(data);
            _this.classes = data;
        }); });
    };
    ClassComponent = __decorate([
        core_1.Component({
            selector: 'class',
            template: require('./templates/class.component.html'),
            styles: [require('./styles/app.component.css'), require('./styles/class.component.css')]
        }), 
        __metadata('design:paramtypes', [services_1.ClassService])
    ], ClassComponent);
    return ClassComponent;
}(loading_indicator_1.LoadingPage));
exports.ClassComponent = ClassComponent;
//# sourceMappingURL=class.component.js.map