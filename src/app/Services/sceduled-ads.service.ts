import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SceduledAdsService {

  listOfAds:string[];

  constructor() { 
    this.listOfAds=[
      'Try Ad Now! Its Free',
      'Arrive to 50% Discount ',
      'Wait for Us ',
      'Big offers '
    ]
  }
  getAds()
  {
    return new Observable<string>((observer)=>{
    let i=0;
  let msgTime= setInterval(()=> {

    if(this.listOfAds[i]=="")
    {
       observer.error("Empty")
    }

    observer.next(this.listOfAds[i])

    if(i<this.listOfAds.length-1)
    {
       i++
    }
    else
    {
      observer.complete()
    }
    
    },4000)
    return { 
     
      unsubscribe(){
       clearInterval(msgTime);
       console.log("Unsubscribe");
      }
    }
  })
 
  
}
}

function unsubscribe() {
  throw new Error('Function not implemented.');
}
