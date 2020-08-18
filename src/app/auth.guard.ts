import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private customerService : CustomerService, private router: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.customerService.isLoggedIn().pipe(
        map((res)=>{
          console.log("Auth guard response:"+JSON.stringify(res))
          if (res.user.isLoggedIn) {
            this.customerService.loginEvent(res.user);
            return true;
          }
          else{
            console.log("Auth guard can not log");
            this.router.navigate[''];
            return false;
          }
        })
      )
  }
}
