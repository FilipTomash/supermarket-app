import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/interfaces/products.interface';
import { BASE_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.http
      .get(`${BASE_URL}/products`)
      .pipe(map((value) => value as Product[]));
  }
}
