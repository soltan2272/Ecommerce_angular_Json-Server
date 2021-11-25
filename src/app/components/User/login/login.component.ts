import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  loginform: FormGroup = {} as FormGroup;

  isUserLogged: boolean = false;
  constructor(private fb: FormBuilder, private userloginservice: UserLoginService ,private router:Router) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {


  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required]
    });

    //this.userloginservice.login("gfggff","ghfh");
    this.isUserLogged = this.userloginservice.loginStatus();

  }

  login() {

    console.log(this.loginform.get("Email"));
    console.log(this.loginform.get("Password"));
    this.userloginservice.login(this.loginform.controls["Email"].value, this.loginform.controls["Password"].value);
    this.isUserLogged = this.userloginservice.loginStatus();
    //this.router.navigate(["/User/MyProfile"])
    console.log(this.isUserLogged)
  }
  logout() {
    this.userloginservice.logout();
    this.isUserLogged = this.userloginservice.loginStatus();
    console.log(this.isUserLogged)
  }

  onSubmit() {
    console.log(this.loginform.controls["Email"].value);
    console.log(this.loginform.controls["Password"].value);
    this.login()
  }
  getEmail() {
    return this.loginform.controls["Email"].value;
  }
  getPassword() {
    return this.loginform.controls["Password"].value;

  }

}
