import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductTableComponent } from './components/products-table/products-table.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsTotalComponent } from './components/products-total/products-total.component';
import { ProductsContainerComponent } from './containers/products-container/products-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    ProductTableComponent,
    HeaderComponent,
    FooterComponent,
    ProductsTotalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
