import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { SceduledAdsService } from '../Services/sceduled-ads.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 showAd:String="";
  constructor(private ads:SceduledAdsService) { }

  ngOnInit(): void {
    const sunscriber={
      next:(msg:string)=>{this.showAd=msg},
      error:(err:string)=>{this.showAd=("errorr "+err)},
      complete:()=>{this.ads.getAds().pipe(map((elem)=>"AD "+elem)
      ).subscribe(sunscriber)}
    }
    
    this.ads.getAds().pipe(
      //filter((elem)=>elem.includes("50%")),
      map((elem)=>"AD "+elem)
    ).subscribe(sunscriber)
  }

}
