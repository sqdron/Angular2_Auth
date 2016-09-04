import {Component} from "@angular/core";
import {User} from "../../shared/models/user";
@Component({
  selector: 'login',
  templateUrl: './login-forgot.component.html'
})

export class LoginForgotComponent{
  user: User = new User();

  login() {

  }
}
