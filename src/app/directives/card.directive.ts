
import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appCard]'
})
export class CardDirective {
  
  @Input('appCard') BgColor:string="#8A2BE2";
  constructor(private elem:ElementRef) { 
   
    this.elem.nativeElement.style="border-radius: 3vw 4vw 8vw 2vw;box-shadow: inset 0 0 0px 0px rgba(0, 0, 0, 0.8);"
 
  }
  //yes we need ngonchange
  ngOnChanges(): void {
    this.elem.nativeElement.style="background-color: " + this.BgColor;
  }
  @HostListener('mouseover') onMouseOver()
  {
   
    this.elem.nativeElement.style="border-radius: 3vw 4vw 8vw 2vw; box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.25);background-color: " + this.BgColor;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elem.nativeElement.style="border-radius: 3vw 4vw 8vw 2vw;box-shadow: inset 0 0 0px 0px rgba(0, 0, 0, 0.8);background-color: " + this.BgColor;
   
  }


}
