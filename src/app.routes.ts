import { LoginComponent } from './components/login.component'

import { LoggedInGuard } from './services/logged-in.guard';
import {ExerciseComponent} from "./components/exercise.component";
import {RegisterComponent} from "./components/register.componet";

export const routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent},
    { path: 'Exercise', component: ExerciseComponent, canActivate: [LoggedInGuard] }
];