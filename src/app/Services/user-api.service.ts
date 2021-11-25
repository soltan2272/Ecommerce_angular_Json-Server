import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../Viewmodels/iuser';
import { UserLoginService } from './user-login.service';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  userInfo:IUser={} as IUser;
  constructor(private httpservice:HttpClient) { }

  userGetData()
  {
    return this.httpservice.get<IUser[]>(`${environment.APIURL}/user`);
  }
  Register(email: string, pwd: string,name:string )
  {
    this.userInfo.name=name;
    this.userInfo.password=pwd;
    this.userInfo.email=email;
    this.userInfo.pic="assets/sol.jpg"

    const httpOptions={
      headers:new HttpHeaders({
        'content-type': 'application/JSON'})
    }
   return this.httpservice
             .post(`${environment.APIURL}/user`,JSON.stringify(this.userInfo), httpOptions);
  }
}
