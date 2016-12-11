import { LoginComponent } from './components/login.component'

import { LoggedInGuard } from './services/logged-in.guard';
import {ExerciseComponent} from "./components/exercise.component";
import {RegisterComponent} from "./components/register.componet";
import {DashboardComponent} from "./components/dashboard.componet";

export const routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent},
    { path: 'Dashboard', component: DashboardComponent,canActivate: [LoggedInGuard]},
    { path: 'Exercise', component: ExerciseComponent, canActivate: [LoggedInGuard] }
];