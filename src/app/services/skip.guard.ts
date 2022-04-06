import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {CurrentReservationService} from "./current-reservation.service";

@Injectable({
  providedIn: 'root'
})
export class SkipGuard implements CanActivate {
  constructor(private currentReservationService: CurrentReservationService,
              private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route);
    if(route.routeConfig?.path === "reservation-info"){
      if(this.currentReservationService.checkAndEvaluateIfPersonalInfoFilled()){
        return true;
      }
      else{
        this.router.createUrlTree(['/personal-info']);
        return false;
      }
    }

    if(route.routeConfig?.path === "optionals"){
      if(this.currentReservationService.checkAndEvaluateIfReservationInfoFilled()){
        return true;
      }
      else{
        this.router.createUrlTree(['/reservation-info']);
        return false;
      }
    }

    return this.router.createUrlTree(['/personal-info']);
  }

}
