import { Component, OnInit } from '@angular/core';

import { ProductApiService } from 'src/app/Services/product-api.service';
import { UserApiService } from 'src/app/Services/user-api.service';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  totalPricesArr: { id: number, totprice: number,itmimg:string,itmname:string,itmQuantity:number }[] = [];
  totalPrice:number=0;
  constructor(private prdApi:ProductApiService,public usrLoged:UserLoginService) {
   
   }

  ngOnInit(): void {
    this.prdApi.itemvalue.subscribe(
      (res)=>this.totalPricesArr=res
    )
    
    for(let i=0;i<this.totalPricesArr.length;i++)
    {
      this.totalPrice+=this.totalPricesArr[i].totprice;
    }
    this.prdApi.cartvalue.next(0);
    this.prdApi.itemvalue.next([])
  }

}
