import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Product } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  productsSubject$ = this.productsSerivce.productsSubject$;
  domesticProducts: Product[];
  importedProducts: Product[];
  domesticCost: number;
  importedCost: number;
  products: Product[];

  constructor(private productsSerivce: ProductsService) {}

  ngOnInit(): void {
    this.productsSerivce.getProducts();
    this.getDomesticInfo();
    this.getImportedInfo();
  }

  getDomesticInfo() {
    this.productsSubject$
      .pipe(
        map((value) => {
          return value.filter((value) => value.domestic);
        }),
        tap((value) => {
          this.domesticCost = value.reduce((acc, curr) => acc + curr.price, 0);
        })
      )
      .subscribe((value) => {
        this.domesticProducts = value;
      });
  }

  getImportedInfo() {
    this.productsSubject$
      .pipe(
        map((value) => {
          return value.filter((value) => !value.domestic);
        }),
        tap((value) => {
          this.importedCost = value.reduce((acc, curr) => acc + curr.price, 0);
        })
      )
      .subscribe((value) => {
        this.importedProducts = value;
      });
  }
}
