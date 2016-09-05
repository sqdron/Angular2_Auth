import {CreateUser} from "../models/user";
import {Injectable} from "@angular/core";
import {LocalStorageService} from "angular-2-local-storage/src/LocalStorageService";
import {UserLogin} from "../models/login";
@Injectable()
export class AuthService {
    private authToken: string = 'authToken';

    constructor(private localStorageService: LocalStorageService) {
    }

    authorize(token: string, user: UserLogin) {
        this.localStorageService.set(this.authToken, token);
    }

    getToken(): string {
        return this.localStorageService.get<string>(this.authToken);
    }

    logout() {
        this.localStorageService.remove(this.authToken);
    }

    isLoggedIn(): boolean {
        return !!this.localStorageService.get<string>(this.authToken);
    }
}