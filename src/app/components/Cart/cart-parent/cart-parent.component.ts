import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app//Viewmodels/icategory';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { UserLoginService } from 'src/app/Services/user-login.service';
import { CartChildComponent } from '../cart-child/cart-child.component';


@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.scss']
})
export class CartParentComponent implements OnInit {

  websitename: string;
  ProductCategory: ICategory[];
  selectedcategory: number = 0;
  totalPrice: number = 0;
  selectedlist: { id: number, totprice: number, itmimg: string, itmname: string, itmQuantity: number }[] = [];
  prodctarr: { id: number, totprice: number, itmimg: string, itmname: string, itmQuantity: number }[] = [];

  totalPricesArr: { id: number, totprice: number,itmimg:string,itmname:string,itmQuantity:number }[] = [];

  @ViewChild('selecval') custNameselect!:ElementRef;
  @ViewChild(CartChildComponent) cartchild!:CartChildComponent;

  constructor(private usrService:UserLoginService,private router:Router,private prodApi:ProductApiService) {
    this.websitename = "Karakeeb"
    this.ProductCategory = [{ id: 1, Name: "Mobiles" }, { id: 2, Name: "TV" }, { id: 3, Name: "Laptops" }];

  }

  ngOnInit(): void {
    this.prodApi.itemvalue.subscribe(
      {
        next:(res)=>this.selectedlist=res
      }
    )
  }
  receiveTotalPrice(prodcarray: any) {
    this.totalPrice = 0;
    this.selectedlist = prodcarray;
    //this.prodctarr=prodcarray;
    for (let i = 0; i < prodcarray.length; i++) {
      console.log(prodcarray.totprice)
      this.totalPrice += prodcarray[i].totprice;
    }
  }

  ngAfterViewInit(): void {
    this.custNameselect.nativeElement.style.backgroundColor="orange";
    this.custNameselect.nativeElement.value="hello";

    
    console.log(this.custNameselect.nativeElement.value);
  
  }

  checkchildlist()
  {
    let childcom= this.selectedcategory;
    console.log(childcom);
  }

  checkOut()
  {
    if(this.usrService.loginStatus()==false)
    alert("Please Login First");
    else
    this.router.navigate(["/Invoice"])
  }

}
