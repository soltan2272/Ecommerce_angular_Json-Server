import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../Viewmodels/iuser';
import { ProductApiService } from './product-api.service';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  userData:IUser[]=[] as IUser[];
  public loggedUser:IUser={} as IUser;
  isLoggedStatusSubject: BehaviorSubject<boolean>
  constructor(private router: Router,private userservice:UserApiService,private prdtApi:ProductApiService) { this.isLoggedStatusSubject = new BehaviorSubject<boolean>(false) }

  login(email: string, pwd: string): boolean {

    this.userservice.userGetData().subscribe({
      next:(res)=>{this.userData=res
        
      } 
    });
    for(let i=0;i<this.userData.length;i++)
    {
      if(this.userData[i].email==email &&this.userData[i].password==pwd)
      {
        let usrToken: string = "0600f938-7c7f-4bef-a569-3e15dcc43140";
        localStorage.setItem('usrToken', usrToken);
        this.loggedUser=this.userData[i];
        this.isLoggedStatusSubject.next(true);
        return true;
      }
    }
    return false;
   
  }

 
  logout() {

    localStorage.removeItem('usrToken');
    this.isLoggedStatusSubject.next(false);
    this.prdtApi.cartvalue.next(0);
  }


  loginStatus(): boolean {
    if (localStorage.getItem('usrToken')) {
      return true;
    }
    else {

      return false;
    }
  }
  loginStatuSubject():Observable<boolean> {
   return   this.isLoggedStatusSubject.asObservable();
  }

}


