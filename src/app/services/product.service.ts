import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from '../../assets/data';
import { IProduct } from 'src/app/interfaces/product.interface';
import { Review } from 'src/app/interfaces/review.interface';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  calculateAverageRating(reviews: Review[]): number {
    const averageRating: number =
      reviews.reduce((acc: number, review: Review) => acc + review.rating, 0) /
      reviews.length;
    return averageRating;
  }
  getMainProduct(): Observable<IProduct> {
    const mainProduct = data.find((product) => product.main);
    return of(mainProduct ? mainProduct : null);
  }

  getProductArray(): Observable<IProduct[]> {
    const productsArray = data.filter((product) => !product.main);
    return of(productsArray);
  }

  getProductById(id: number): Observable<IProduct> {
    let newObject:IProduct = data.find((product) => product.id === id)
    newObject.averageRating = this.calculateAverageRating(newObject.review)

    return of(newObject);
  }
}
