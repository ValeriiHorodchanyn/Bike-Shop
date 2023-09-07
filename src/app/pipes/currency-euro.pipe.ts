import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEuro',
})
export class CurrencyEuroPipe implements PipeTransform {
  transform(price: number, discount: number = 0): string {
    return discount === 0
      ? `€ ${Math.round(price / 39.96).toFixed(2)}`
      : `€ ${Math.round((price / 39.96) * (1 - discount / 100)).toFixed(2)}`;
  }
}
