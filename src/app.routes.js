"use strict";
var login_component_1 = require('./components/login.component');
var logged_in_guard_1 = require('./services/logged-in.guard');
var exercise_component_1 = require("./components/exercise.component");
var register_componet_1 = require("./components/register.componet");
exports.routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: login_component_1.LoginComponent },
    { path: 'Register', component: register_componet_1.RegisterComponent },
    { path: 'Exercise', component: exercise_component_1.ExerciseComponent, canActivate: [logged_in_guard_1.LoggedInGuard] }
];
//# sourceMappingURL=app.routes.js.map