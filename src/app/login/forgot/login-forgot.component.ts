import {Component} from "@angular/core";
import {CreateUser} from "../../shared/models/user";
@Component({
  selector: 'login',
  templateUrl: './login-forgot.component.html'
})

export class LoginForgotComponent{
  user: CreateUser = new CreateUser();

  login() {

  }
}
