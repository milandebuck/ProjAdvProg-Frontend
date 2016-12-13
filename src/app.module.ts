import { NgModule } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { GlobalEventsManager } from './GlobalEventsManager';

import {
    AppComponent,
    LoginComponent,
    ExerciseComponent,
    LoadingIndicator,
    RegisterComponent,
    DashboardComponent,
    NavComponent
} from './components';

import { routes } from './app.routes';

//services

import {
    EntryService,
    CookieService,
    UserService,
    LoggedInGuard,
    ExtractService,
    ScoreService
} from './services'


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        LoginComponent,
        ExerciseComponent,
        LoadingIndicator,
        RegisterComponent,
        DashboardComponent,
        NavComponent
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
        CookieService,
        ExtractService,
        ScoreService,
        GlobalEventsManager
    ]
})
export class AppModule {}