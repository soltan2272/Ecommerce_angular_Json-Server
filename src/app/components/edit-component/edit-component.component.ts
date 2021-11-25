import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Iproduct } from 'src/app/Viewmodels/iproduct';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {

  pID:number=0;
  product:Iproduct={} as  Iproduct;
  constructor(private acivatedRouter:ActivatedRoute ,private prdApiService:ProductApiService,
   private router:Router) { }

  ngOnInit(): void {
    this.acivatedRouter.paramMap.subscribe((param)=>
  {
    this.pID=Number(param.get("PID"));
    this.prdApiService.getProdByID(this.pID).subscribe((res)=>this.product=res);
  });
    
  }
  EditProduct()
  {
    this.prdApiService.editProduct(this.pID,this.product).subscribe({
      next:res=>{console.log(res);
        this.router.navigate(["/AdminProduct"])
      },
      error:err=>{console.log("Errot ")+err}
      
    });
  }
}
