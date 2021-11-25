import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserApiService } from 'src/app/Services/user-api.service';
import { UserLoginService } from 'src/app/Services/user-login.service';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private usrService:UserApiService,private usrLogin:UserLoginService,private usrData:UserLoginService)
    {

    }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.usrLogin.loginStatus()==true &&this.usrData.loggedUser.role==1)
    {
      return true;
    }
    alert("Sorry Allow only for admins ")
    return false;
  }
  
}
