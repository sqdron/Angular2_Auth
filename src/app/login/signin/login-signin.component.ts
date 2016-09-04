import {Component} from "@angular/core";
import {User} from "../../shared/models/user";
@Component({
  selector: 'login',
  templateUrl: './login-signin.component.html'
})

export class LoginSignInComponent{
  user: User = new User();

  signin() {

  }
}
