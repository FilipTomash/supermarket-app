import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainerComponent } from './containers/products-container/products-container.component';

const routes: Routes = [{ path: '', component: ProductsContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
