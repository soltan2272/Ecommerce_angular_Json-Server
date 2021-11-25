import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/Services/user-api.service';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {

  loginfrm: FormGroup = {} as FormGroup;

  isUserLogged: boolean = false;
  constructor(private fb: FormBuilder, private userloginservice: UserLoginService,private usrApi:UserApiService,
    private router:Router) {
    
  }

  ngOnInit(): void {
    this.loginfrm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      Name:['',Validators.required]
    });

    //this.userloginservice.login("gfggff","ghfh");
    this.isUserLogged = this.userloginservice.loginStatus();

  }

  Register() {

    console.log(this.loginfrm.get("Email"));
    console.log(this.loginfrm.get("Password"));
    this.usrApi.Register(this.loginfrm.controls["Email"].value, this.loginfrm.controls["Password"].value,
    this.loginfrm.controls["Name"].value).subscribe({
      next:(res)=>{
        this.userloginservice.login(this.loginfrm.controls["Email"].value, this.loginfrm.controls["Password"].value)
       
      }
    });
    
    this.isUserLogged = this.userloginservice.loginStatus();
    console.log(this.isUserLogged)
  }
  
  onSubmit() {
    console.log(this.loginfrm.controls["Email"].value);
    console.log(this.loginfrm.controls["Password"].value);
   this.Register();
  }
  getEmail() {
    return this.loginfrm.controls["Email"].value;
  }
  getPassword() {
    return this.loginfrm.controls["Password"].value;

  }
}
