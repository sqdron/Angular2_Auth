import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable()
export class UserApi {
  constructor(private http: Http) {
  }

  register(user: User): Observable<User> {
    return this.http.post('/business/' , user).map(r=>{
      return r.json().data;
    });
  }
}
