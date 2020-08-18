import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FruitsAndVegetablesComponent } from './fruits-and-vegetables/fruits-and-vegetables.component';
import { DairyProductsAndEggsComponent } from './dairy-products-and-eggs/dairy-products-and-eggs.component';
import { BakeryAndBreadComponent } from './bakery-and-bread/bakery-and-bread.component';
import { MeatChickenFishComponent } from './meat-chicken-fish/meat-chicken-fish.component';
import { DrinksAndWineComponent } from './drinks-and-wine/drinks-and-wine.component';
import {MatSelectModule} from '@angular/material/select';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import {PopoverModule} from "ngx-smart-popover";
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { OrderComponent } from './order/order.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './search.pipe';
import { DialogRegisterComponent } from './dialog-register/dialog-register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoComponent,
    AboutUsComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    FruitsAndVegetablesComponent,
    DairyProductsAndEggsComponent,
    BakeryAndBreadComponent,
    MeatChickenFishComponent,
    DrinksAndWineComponent,
    CartComponent,
    SearchComponent,
    AddProductComponent,
    EditProductComponent,
    ProductItemComponent,
    OrderComponent,
    DialogComponent,
    SearchPipe,
    DialogRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    MatSelectModule,
    PopoverModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
