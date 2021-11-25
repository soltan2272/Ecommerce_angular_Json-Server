import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/Services/productservice.service';
import { Iproduct } from 'src/app/Viewmodels/iproduct';
import { Location } from '@angular/common';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prodID:any;
  product:Iproduct={} as Iproduct;
  constructor(private acivatedRouter:ActivatedRoute , private productService:ProductserviceService,
    private router:Router ,private location:Location) { }

  ngOnInit(): void {
 /* this.prodID=Number(this.acivatedRouter.snapshot.paramMap.get("PID"));
  this.product=this.productService.getProductByID(this.prodID)*/
this.acivatedRouter.paramMap.subscribe((param)=>
  {
    this.prodID=Number(param.get("PID"));
    this.product=this.productService.getProductByID(this.prodID);
  });
    
  }
  nextPage()
  {
    if(this.productService.getAllProduct().length==this.prodID)
    this.prodID=0;
    else
    this.router.navigate(["/Product",this.prodID+1])
   
  }

  prevPage()
  {
    this.router.navigate(["/Product",this.prodID-1])
  }
  goBack()
  {
    this.location.back();
  }

}
