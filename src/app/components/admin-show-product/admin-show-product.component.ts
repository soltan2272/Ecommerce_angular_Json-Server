import { Component, OnInit } from '@angular/core';

import { Output , Input, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import { ProductserviceService } from 'src/app/Services/productservice.service';
import { Iproduct } from 'src/app/Viewmodels/iproduct';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-admin-show-product',
  templateUrl: './admin-show-product.component.html',
  styleUrls: ['./admin-show-product.component.scss']
})
export class AdminShowProductComponent implements OnInit,OnChanges {
  [x: string]: any;

 
 
  
  selectedlist:Iproduct[];
  totalPrice:number=0;


  totalQuantity:number=0;

  constructor(private prdApiService:ProductApiService) { 
    this.selectedlist=[]
  
  }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.prdApiService.getAllData().subscribe(
      (res)=>this.selectedlist=res
    )
  }
    
  deleteItem(prdID:number)
  {
    this.prdApiService.deleteProduct(prdID).subscribe((res)=>{
      console.log(res);
      this.prdApiService.getAllData().subscribe(
        (res)=>this.selectedlist=res
      )
    });
  }
 
}
