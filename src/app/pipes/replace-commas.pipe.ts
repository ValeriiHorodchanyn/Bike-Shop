import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCommas',
})
export class ReplaceCommasPipe implements PipeTransform {
  transform(array: Array<string>): string {
    return array.join('/');
  }
}
