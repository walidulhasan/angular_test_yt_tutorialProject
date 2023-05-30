import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCLI'
})
export class AppendCLIPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return "Name CLI: " + value;
  }

}
