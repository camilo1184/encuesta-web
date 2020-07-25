import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";
import { StorageService } from './StorageService';

@Injectable({
    providedIn: "root"
})
export class RequestGuardService implements CanActivate {

    constructor(private router: Router,
        private storageService: StorageService) {
    }

    canActivate(route: ActivatedRouteSnapshot) {
        let user = this.storageService.getItem('user');
        console.log(user)
        if (user === null || user === undefined){
            console.log('entraS')
            this.router.navigate(['/notAuthorized'])
            return false;
        }
        return true;
    }
}