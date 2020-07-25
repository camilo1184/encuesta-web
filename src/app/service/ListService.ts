import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ListService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = environment.apiUrl + 'brand';
    }

    findListPcs(): Observable<any> {
        return this.http.get(this.url, { responseType: 'json' });
    }
}