import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { SceduledAdsService } from '../Services/sceduled-ads.service';
import { DiscountOffers } from '../Viewmodels/discount-offers';
import { ICategory } from '../Viewmodels/icategory';
import { Iproduct } from '../Viewmodels/iproduct';
import { Storedata } from '../Viewmodels/storedata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stoedlist:Storedata
  disoffer:DiscountOffers;
  ClientName:string;
  ProductList:Iproduct[];
  selectedlist:Iproduct[];
  productcat:ICategory[];
  isbuy:boolean;
  selectedValue:number;
  birtharr:number[];
  creditnumbers:number[];
  SSNnum:number;
  mapurl:string

  constructor(private ads:SceduledAdsService) {
    this.stoedlist=new Storedata("Karakeeb store","https://picsum.photos/200/300",["Cairo","Assiut","Alex","Ismallia","portsaid"])
    this.disoffer=DiscountOffers.tenpercnt;
    this.ClientName="";
    this.isbuy=false;
    this.selectedValue=0;
    this.SSNnum=0
    this.mapurl="ttps://www.google.com/maps/search/?api=1&query=30.0596185,31.1884236"
    this.birtharr=[29909011509345,28505221507856,27012151509345];
    this.creditnumbers=[1236549876548965,8529637418565478,4659000066448964];

    this.ProductList=[{id:1,Prod_Name:"Samsung A5",Quantity:10,Price:3000,Img:"assets/mob1.jpg",Cat_ID:1},
    {id:2,Prod_Name:"Toshiba",Quantity:2,Price:2000,Img:"assets/tv1.jpg",Cat_ID:2},
    {id:3,Prod_Name:"OPPO RENO4",Quantity:7,Price:5000,Img:"assets/mob2.jpg",Cat_ID:1},
    {id:4,Prod_Name:"ideapad2",Quantity:15,Price:12000,Img:"assets/lap2.png",Cat_ID:3} ,
    {id:5,Prod_Name:"ffalcon",Quantity:7,Price:2000,Img:"assets/tv2.png",Cat_ID:2} ,
    {id:6,Prod_Name:"macbook air",Quantity:2,Price:25000,Img:"assets/lap1.jpg",Cat_ID:3} 
  ]
    this.productcat=[{id:1,Name:"Mobiles"},{id:2,Name:"TV"},{id:3,Name:"Laptops"}];
    this.selectedlist=this.ProductList;
   }

  ngOnInit(): void {
  /*  const sunscriber={
      next:(msg:string)=>{alert(msg)},
      error:(err:string)=>{alert("errorr "+err)},
      complete:()=>{alert("Finish Thanks")}
    }
    this.ads.getAds().subscribe(sunscriber)*/
  }
  buyprodct(idval:number)
  {
    for(let i=0;i<this.ProductList.length;i++)
    {
      if(this.ProductList[i].id==idval)
      this.ProductList[i].Quantity--;
    }
    this.selectedlist=this.ProductList;
  }

  cat_change(val:any)
  {
    
    if(val==0)
    this.selectedlist=this.ProductList;
    else
    {
      this.selectedlist=this.ProductList.filter(i=>i.Cat_ID==val);
    }
 
  }

  
}
