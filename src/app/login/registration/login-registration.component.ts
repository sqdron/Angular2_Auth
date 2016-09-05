import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {CreateUser} from "../../shared/models/user";
import {UserApi} from "../../shared/api/users.api";

@Component({
    selector: 'login',
    templateUrl: './login-registration.component.html'
})

export class LoginRegistrationComponent {
    constructor(private userApi: UserApi, private router: Router) {
    }

    user: CreateUser = new CreateUser();

    submit() {
        this.user.username = this.user.email;
        this.userApi.register(this.user).subscribe(this.redirect, this.redirect);
    }

    redirect() {
        this.router.navigate(['/']);
    }
}
