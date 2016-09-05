
import {Injectable} from "@angular/core";
import {Http, Response, RequestOptionsArgs, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
@Injectable()

export class CustomHttp {
    constructor(private http: Http, private authService: AuthService) {
    }

    get(url: string, query?: any, customOptions?: RequestOptionsArgs): Observable<Response> {
        return this.http.get(this.baseUrl() + url, customOptions ? customOptions : this.requestOptions(query));
    }

    post(url: string, body: any): Observable<Response> {
        if( body.access_token == null)
        {
            body.access_token = this.authService.getToken();
        }
        return this.http.post(this.baseUrl() + url, body);
    }

    baseUrl(): string {
        return 'https://api.connecthealth.io/v1';
    }

    private requestOptions(query: any): RequestOptionsArgs {
        var searchParams = new URLSearchParams();
        searchParams.append('access_token', this.authService.getToken());
        for (var key in query) {
            searchParams.append(key, query[key])
        }

        return {search: searchParams};
    }
}
