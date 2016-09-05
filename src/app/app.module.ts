import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {LoginSignInComponent} from "./login/signin/login-signin.component";
import {LoginForgotComponent} from "./login/forgot/login-forgot.component";
import {LoginRegistrationComponent} from "./login/registration/login-registration.component";
import {NoContentComponent} from "./no-content/no-content.component";
import {UserApi} from "./shared/api/users.api";
import {LOCAL_STORAGE_SERVICE_CONFIG} from "angular-2-local-storage/src/LocalStorageServiceConfig";
import {LocalStorageService} from "angular-2-local-storage/src/LocalStorageService";
import {CustomHttp} from "./shared/services/http.service";

let localStorageServiceConfig = {
    prefix: 'angular2auth',
    storageType: 'localStorage'
};

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LoginSignInComponent,
        LoginForgotComponent,
        LoginRegistrationComponent,
        NoContentComponent
    ],
    providers: [UserApi, {provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig},
        LocalStorageService, CustomHttp],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true})
    ]
})
export class AppModule {
}