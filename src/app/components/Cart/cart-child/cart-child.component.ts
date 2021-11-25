import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Output , Input, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import { ProductserviceService } from 'src/app/Services/productservice.service';
import { Iproduct } from 'src/app/Viewmodels/iproduct';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { ProductApiService } from 'src/app/Services/product-api.service';



@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss']
})
export class CartChildComponent implements OnInit,OnChanges {
  [x: string]: any;

 
 
  
  selectedlist:Iproduct[];
  aftercalctotal:number=0;
  totalPrice:number=0;


  totalItemPrice:number=0;

  totalPricesArr: { id: number, totprice: number,itmimg:string,itmname:string,itmQuantity:number }[] = [];

  @Output() onTotalPriceChange: EventEmitter< { id: number, totprice: number,itmimg:string,itmname:string,itmQuantity:number }[]>;

  @Input() SelectedCat:number=0;

 
  totalQuantity:number=0;

  constructor(public prdctService:ProductserviceService,private router:Router,private prdApiService:ProductApiService) { 
    this.selectedlist=[]


    // this.selectedlist=this.ProductList;
     this.onTotalPriceChange=new EventEmitter< { id: number, totprice: number,itmimg:string,itmname:string ,itmQuantity:number}[]>();
  }
  ngOnChanges(): void {
    if(this.SelectedCat==0)
  //  this.selectedlist = JSON.parse(JSON.stringify(this.prdctService.getAllProduct()));
   JSON.parse(JSON.stringify(this.prdApiService.getAllData().subscribe(res=>this.selectedlist=res)));
    else
    //this.prdApiService.getProdByCat(this.SelectedCat).subscribe(res=>this.selectedlist=res)
    {
      this.prdApiService.getAllData().subscribe(res=>this.selectedlist=res.filter(i=>i.Cat_ID==this.SelectedCat))
   //   this.selectedlist=this.selectedlist.filter(i=>i.Cat_ID==this.SelectedCat)
    }
  }

  ngOnInit(): void {
  }
    CalcPrice(itemPrice:number, itemCount:any,itemID:number,itemImge:string,itemName:string)
  {

    itemCount=parseInt(itemCount);
    let quantity=0
    this.totalQuantity=0;
    for(let i=0;i<this.prdctService.ProductList.length;i++)
    {
      if(this.prdctService.ProductList[i].id==itemID)
      {
        console.log
        quantity=this.prdctService.ProductList[i].Quantity;
        console.log(quantity)
        console.log(itemCount)
        this.selectedlist[i].Quantity=quantity-itemCount;
       
        console.log(this.selectedlist)
        console.log(this.prdctService.ProductList);
      }
     }
  // this.selectedlist=this.ProductList;


  this.totalPrice=0;
    itemCount=parseInt(itemCount);
    this.totalItemPrice=(itemPrice * +itemCount);
    let count=0;

    if(this.totalPricesArr.length==0)
    {
      this.totalPricesArr.push({id:itemID,totprice:this.totalItemPrice,itmimg:itemImge,itmname:itemName,itmQuantity:itemCount});
    }
   
     else
    {
    for(let i=0;i<this.totalPricesArr.length;i++)
    {
      if(this.totalPricesArr[i].id==itemID)
      {
        this.totalPricesArr[i].totprice=this.totalItemPrice;
        this.totalPricesArr[i].itmQuantity=itemCount;
        count++;
      
      }
    
    }
    if(count==0)
    this.totalPricesArr.push({id:itemID,totprice:this.totalItemPrice,itmimg:itemImge,itmname:itemName,itmQuantity:itemCount});
    console.log(this.totalPricesArr)

  }
  for(let i=0;i<this.totalPricesArr.length;i++)
  {
    console.log(this.totalPricesArr[i].totprice)
    this.totalPrice+=this.totalPricesArr[i].totprice;
  }
  for(let i=0;i<this.totalPricesArr.length;i++)
  {
    console.log(this.totalPricesArr[i].totprice)
    this.totalQuantity+=this.totalPricesArr[i].itmQuantity;
  }
 
  this.onTotalPriceChange.emit(this.totalPricesArr);
  this.prdApiService.cartvalue.next(this.totalQuantity);
  this.prdApiService.itemvalue.next(this.totalPricesArr);
console.log(this.totalQuantity);

  }
 
  openproddetails(prodID:Number)
  {
    this.router.navigate(["/Product",prodID])
  }

  getCartValue():Observable<number> {
    return   this.prdApiService.cartvalue.asObservable();
   }

   getCartitem():Observable< { id: number, totprice: number,itmimg:string,itmname:string,itmQuantity:number }[]> {
    return   this.prdApiService.itemvalue.asObservable();
   }
}
