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


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LoginSignInComponent,
        LoginForgotComponent,
        LoginRegistrationComponent,
        NoContentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true})
    ]
})
export class AppModule {}