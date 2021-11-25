import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform(mapurl:string):string {
   // return null;
   let attitudeindex=mapurl.indexOf("query");
   let attide=mapurl.substring(attitudeindex,);
   let commaindex=attide.indexOf(",");
   let latitude=attide.substring(commaindex+1);
   let longtude=attide.substring(commaindex+1,);
   let fullstr="latidude :"+latitude + " longtide"+longtude;
   return fullstr;
  }

}
