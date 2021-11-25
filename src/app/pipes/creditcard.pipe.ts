import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {

  transform(SSN:number):string  {
    let str=SSN.toString();
    let part1=str.substring(0,4);
    let part2=str.substring(4,8);
    let part3=str.substring(8,12);
    let part4=str.substring(12,16);
    let myformat=part1+"-"+part2+"-"+part3+"-"+part4;
    return myformat;

  }

}
