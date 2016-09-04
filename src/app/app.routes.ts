import {Routes} from '@angular/router';

import {NoContentComponent} from "./no-content/no-content.component";
import {LoginSignInComponent} from "./login/signin/login-signin.component";
import {LoginForgotComponent} from "./login/forgot/login-forgot.component";
import {LoginRegistrationComponent} from "./login/registration/login-registration.component";

export const ROUTES: Routes = [
    {path: '', component: LoginSignInComponent},
    {path: 'login/signin', component: LoginSignInComponent},
    {path: 'login/forgot', component: LoginForgotComponent},
    {path: 'login/registration', component: LoginRegistrationComponent},
    {path: '**', component: NoContentComponent},
];
