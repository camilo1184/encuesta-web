import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class StorageService {

    private storage: Storage;

    constructor() {
        this.storage = localStorage;
    }

    setItem(key: string, value: string){
        this.storage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string){
        return JSON.parse(this.storage.getItem(key));
    }
}