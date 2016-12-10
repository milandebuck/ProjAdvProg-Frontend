import { NgModule } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {
    AppComponent,
    LoginComponent,
    ExerciseComponent,
    LoadingIndicator,
    RegisterComponent,
    DashboardComponent
} from './components';

import { routes } from './app.routes';

//services

import { UserService } from './services/user.service';
import { LoggedInGuard } from './services/logged-in.guard';
import { EntryService } from './services/entry.service';
import {CookieService} from "./services/cookie.service";


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        LoginComponent,
        ExerciseComponent,
        LoadingIndicator,
        RegisterComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes),
        JsonpModule,
        ChartsModule
    ],
    providers: [
        UserService,
        LoggedInGuard,
        EntryService,
        CookieService
    ]
})
export class AppModule {}