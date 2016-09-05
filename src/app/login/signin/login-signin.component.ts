import {Component} from "@angular/core";
import {UserApi} from "../../shared/api/users.api";
import {UserLogin} from "../../shared/models/login";
@Component({
    selector: 'login',
    templateUrl: './login-signin.component.html'
})

export class LoginSignInComponent {
    constructor(private userApi: UserApi) {
    }

    user: UserLogin = new UserLogin();

    signin() {
        this.userApi.login(this.user).subscribe(()=>{});
        this.userApi.getAccessToken().subscribe(()=>{});

    }
}
