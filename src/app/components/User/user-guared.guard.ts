import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuaredGuard implements CanActivate {
  constructor(private usrLoginService:UserLoginService,private router:Router)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.usrLoginService.loginStatus()==true)
       return true;
       else
       {
        alert("Login First");
        this.router.navigate(['/Login'])
       return false;
       }
  }
  
}
