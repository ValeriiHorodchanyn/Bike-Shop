import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product.interface';
import { Review } from 'src/app/interfaces/review.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product$: Observable<IProduct>;
  private paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.product$ = this.productService.getProductById(+params['id']);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  calculateAverageRating(reviews: Review[]): string {
    const averageRating: number =
      reviews.reduce((acc: number, review: Review) => acc + review.rating, 0) /
      reviews.length;
    return this.showStars(averageRating);
  }
  showReviews = false;

  showStars(averageRating: number): string {
    return '★★★★★'.slice(0, averageRating) + '☆☆☆☆☆'.slice(averageRating);
  }

  toggleReviews() {
    this.showReviews = !this.showReviews;
  }

  maxRate = new Array(5);
}
