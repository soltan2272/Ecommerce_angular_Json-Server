import { Component, OnInit } from '@angular/core';
import { CartChildComponent } from '../components/Cart/cart-child/cart-child.component';
import { UserLoginService } from '../Services/user-login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isUserLogged:boolean=false;
  cartvalue:number=0;
  
  constructor(private userLogin:UserLoginService,private childcom:CartChildComponent ) {
   
   }

  ngOnInit(): void {
    this.userLogin.loginStatuSubject().subscribe({
      next:(logStat)=>{this.isUserLogged=logStat}
    })

    this.childcom.getCartValue().subscribe({
      next:(cartval)=>{this.cartvalue=cartval}
    })
  }
  logout()
  {
    this.userLogin.logout();
  }

}
