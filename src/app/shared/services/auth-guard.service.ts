import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';
import {Observable} from "rxjs";
import {UserApi} from "../api/users.api";

const LoginRoute: string = '/login/signin';
const DefaultRoute: string = '/';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService,
                private userApi: UserApi) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let token: string;
        let isNew: boolean = true;
        if (route.url.length == 2 && route.url[0].path == LoginRoute) {
            token = route.url[1].path;
            this.logout();
        }
        else {
            token = this.authService.getToken();
            isNew = false;
        }

        if (!token) {

            return Observable.of(false);
        }

        if (!isNew) {

            /*var currentUser = this.usersService.getUser();
            if (currentUser.email) {
                return Observable.of(true);
            }*/
        }
        //return this.login(token, isNew);
    }

    logout() {
        this.authService.logout();
    }

    /*login(token: string, isNew: boolean): Observable<boolean> {
        return this.userApi.getUser(token).map(u=> {
            this.authService.authorize(token, u);
            this.usersService.setUser(u);
            if (isNew) {
                this.router.navigate([DefaultPage]);
            }
            return true;
        });
    }*/
}
