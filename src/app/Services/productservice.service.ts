import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iproduct } from '../Viewmodels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  ProductList:Iproduct[];
  private cartval:BehaviorSubject<Number>;

  constructor() { 
    this.ProductList=[{id:1,Prod_Name:"Samsung A5",Quantity:10,Price:3000,Img:"assets/mob1.jpg",Cat_ID:1},
    {id:2,Prod_Name:"Toshiba",Quantity:2,Price:2000,Img:"assets/tv1.jpg",Cat_ID:2},
    {id:3,Prod_Name:"OPPO RENO4",Quantity:7,Price:5000,Img:"assets/mob2.jpg",Cat_ID:1},
    {id:4,Prod_Name:"ideapad2",Quantity:15,Price:12000,Img:"assets/lap2.png",Cat_ID:3} ,
    {id:5,Prod_Name:"ffalcon",Quantity:7,Price:2000,Img:"assets/tv2.png",Cat_ID:2} ,
    {id:6,Prod_Name:"macbook air",Quantity:2,Price:25000,Img:"assets/lap1.jpg",Cat_ID:3} ];

    this.cartval=new BehaviorSubject<Number>(0);
  
  }

  getAllProduct():Iproduct[]
   {
     return this.ProductList;
   }

   getProductByID(pID:number):Iproduct
   {
     let prod=this.ProductList.find(itm=>itm.id==pID);
     return (prod)?prod:{} as Iproduct;
   }
   addprod(prd:Iproduct)
   {
     this.ProductList.push(prd);
     return this.getAllProduct();
   }

   getCart()
   {
     
   }
}
