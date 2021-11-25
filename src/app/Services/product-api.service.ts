import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Viewmodels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  public cartvalue:BehaviorSubject<number>;
  public itemvalue:BehaviorSubject<{ id: number, totprice: number,itmimg:string,itmname:string,itmQuantity:number }[] >

  constructor(private httpservice:HttpClient) { 
    this.cartvalue=new BehaviorSubject<number>(0);
    this.itemvalue=new BehaviorSubject<{ id: number, totprice: number,itmimg:string,itmname:string,itmQuantity:number }[]>([]);
  }

  getAllData():Observable<Iproduct[]>
  {
    return this.httpservice.get<Iproduct[]>(`${environment.APIURL}/product`);
    console.log(this.httpservice.get<Iproduct[]>(`${environment.APIURL}/product`))
  }
  getProdByID(pid:number):Observable<Iproduct>
  {
    return this.httpservice.get<Iproduct>(`${environment.APIURL}/product/${pid}`);
  }
  getProdByCat(catid:number):Observable<Iproduct[]>
  {
    let i=0;
    return this.httpservice.get<Iproduct[]>(`${environment.APIURL}/product`).pipe(
      
      filter((res)=>res[0].Cat_ID==catid
      )
    )
        console.log(this.httpservice.get<Iproduct[]>(`${environment.APIURL}/product`))
  }

  createProduct(prd:Iproduct):Observable<any>
  {
    const httpOptions={
      headers:new HttpHeaders({
        'content-type': 'application/JSON'})
    }
   return this.httpservice
               .post(`${environment.APIURL}/product`,JSON.stringify(prd), httpOptions);
  }
  getDataLegth():number
  {
   return this.httpservice.options.length;
  }

  editProduct(prdID:number, newPrd:Iproduct)
  {
    return  this.httpservice.put<any>(`${environment.APIURL}/product/${prdID}`,newPrd);
  }

  deleteProduct(prdID:number)
  {
    const httpOptions={
      headers:new HttpHeaders({
        'content-type': 'application/JSON'})
    }
    return  this.httpservice.delete(`${environment.APIURL}/product/${prdID}`,httpOptions);
    
  }

}
