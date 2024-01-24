import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-products-total',
  templateUrl: './products-total.component.html',
  styleUrls: ['./products-total.component.scss'],
})
export class ProductsTotalComponent {
  @Input() products: Product[];
  @Input() domesticProducts: Product[];
  @Input() importedProducts: Product[];
  @Input() domesticCost: number;
  @Input() importedCost: number;
}
