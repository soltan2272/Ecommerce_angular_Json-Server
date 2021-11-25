import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductserviceService } from 'src/app/Services/productservice.service';
import { Iproduct } from 'src/app/Viewmodels/iproduct';

@Component({
  selector: 'app-add-product-template',
  templateUrl: './add-product-template.component.html',
  styleUrls: ['./add-product-template.component.scss']
})
export class AddProductTemplateComponent implements OnInit {

  product:Iproduct={} as Iproduct;
 

  constructor(private router:Router ,private prdService:ProductserviceService,private prdApiService:ProductApiService) { }

  ngOnInit(): void {
    
  }

  addProduct()
  {
    //console.log(this.product);
 
    //this.pr.addprod(this.product);
    console.log(this.product);
   this.product.Img="assets/lap2.png"
    this.prdApiService.createProduct(this.product).subscribe({
      next:res=>{console.log(res)
        this.router.navigate(["/AdminProduct"])},
      error:err=>{console.log("Errot ")+err}
      
    });
   // console.log(this.prdService.getAllProduct())
  }
  

}
