import { Injectable } from '@angular/core';
import { ProductsApiService } from './products-api.service';
import { BehaviorSubject, tap } from 'rxjs';
import { Product } from 'src/app/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsSubject$ = new BehaviorSubject<Product[]>([]);

  constructor(private productsApiService: ProductsApiService) {}

  // Calling the fetchProducts of the client api-service and then sorting the data once we get it

  getProducts() {
    this.productsApiService
      .fetchProducts()
      .pipe(
        tap((value) => {
          return value.sort((p1, p2) =>
            p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0
          );
        })
      )
      // nexting or emmiting the sorted data via the behavior subject
      .subscribe({
        next: (value) => {
          this.productsSubject$.next(value);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
