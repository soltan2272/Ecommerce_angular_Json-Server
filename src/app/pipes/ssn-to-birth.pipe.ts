import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ssnToBirth'
})
export class SsnToBirthPipe implements PipeTransform {

  transform(SSN:number,BirtType:string): string {
    let str=SSN.toString();
    let Year="19"+ str.substring(1, 3);
    let Month=str.substring(3, 5);
     let Day=str.substring(5, 7);
    if(BirtType=="DD")
    {
      return Day;
    }
    else if(BirtType=="MM")
    {
      return Month
    }
    else if(BirtType=="YY")
    {
      return Year;
    }
    else
{
    let dateString =Day+"-"+Month+"-"+Year;
  
    return dateString;
}
  

}
}