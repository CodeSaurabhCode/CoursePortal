import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
    providedIn:'root'
})

export class CourseDetailsGuard{
    constructor(private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):boolean{

            const id = Number(route.paramMap.get('id'));
            if(isNaN(id)|| id<1){
                console.log('Invalid movie id')
                this.router.navigate(['/error'])
                return false;
            }
            return true;
    }
}