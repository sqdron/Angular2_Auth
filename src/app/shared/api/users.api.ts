import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

import {CreateUser} from "../models/user";
import {UserLogin} from "../models/login";

@Injectable()
export class UserApi {
    baseUrl = 'https://api.connecthealth.io/v1';

    constructor(private http: Http) {
    }

    login(user: UserLogin): Observable<UserLogin> {
        return this.http.post(`${this.baseUrl}/login`, user).map(r=> {
            return r.json().data;
        });
    }

    getAccessToken(){
        return this.http.post(`${this.baseUrl}/oauth/client/access-token`, {client_id: 'test',
        client_secret: 'test'}).map(r=> {
            return r.json().data;
        });
    }

    register(user: CreateUser): Observable<CreateUser> {
        return this.http.post(`${this.baseUrl}/users`, user).map(r=> {
            return r.json().data;
        });
    }
}
