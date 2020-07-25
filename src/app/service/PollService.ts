import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Poll } from "../model/Poll";

@Injectable({
    providedIn: "root"
})
export class PollService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = environment.apiUrl + 'poll';
    }

    savePoll(poll: Poll): Observable<any> {
        return this.http.post(this.url, poll);
    }

    findPolls(): Observable<any> {
        return this.http.get(this.url);
    }

    deletedPoll(id: string): Observable<any> {
        return this.http.delete(this.url + '/' + id);
    }
}