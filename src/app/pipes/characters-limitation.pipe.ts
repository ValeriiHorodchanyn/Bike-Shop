import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charactersLimitation',
})
export class CharactersLimitationPipe implements PipeTransform {
  transform(str: string, length: number = 35): string {
    return `${str.trim().slice(0, length)}...`;
  }
}
