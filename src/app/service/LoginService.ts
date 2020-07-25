import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/User";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LoginService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = environment.apiUrl + 'login';
    }

    authenticateUser(user: User): Observable<any> {
        return this.http.post(this.url, user, { responseType: 'json' });
    }
}