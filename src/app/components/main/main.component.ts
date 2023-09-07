import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  product$: Observable<IProduct>;

  dataArraySubscription: Subscription;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.dataArraySubscription = this.productService
      .getProductArray()
      .subscribe((products) => {
        this.products = products;
      });

    this.product$ = this.productService.getMainProduct();
  }

  ngOnDestroy(): void {
    if (this.dataArraySubscription) {
      this.dataArraySubscription.unsubscribe();
    }
  }
}
