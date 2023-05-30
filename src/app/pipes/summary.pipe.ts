import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, num?:number): unknown {
    if(!num){
      num=50;
    }
    return value.substring(0,num);
  }

}
