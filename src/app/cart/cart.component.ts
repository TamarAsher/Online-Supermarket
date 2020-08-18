import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartProduct } from '../cartProduct';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: CartProduct[];
  totalPrice: number;
  cart_id: number;
  cart: boolean = false;
  selectedProduct: CartProduct;

  constructor(private productService: ProductService, private _location: Location) { }

  ngOnInit(): void {
    this.openCart();
    this.productService.productAdded.subscribe(()=>
    this.openCart());
  }

  openCart(){
    this.productService.openCart()
    .subscribe(data=>{
      console.log(data)
      if (data && data.length > 0 && data[0].active == 1) {
        console.log("you have active cart")
        this.cart = true;
        this.cart_id = data[0].cart_id;
        console.log("cart ID:"+this.cart_id)
        this.productService.getProductsCart(this.cart_id)
        .subscribe(data=>{
          this.carts = data;
          if (this.cart && this.carts.length == 0) {
            this.cart = false;
          }
          this.productService.getTotalPrice(this.cart_id)
          .subscribe(data=>{
            console.log("total"+JSON.stringify(data))
            this.totalPrice = data[0].total;
          });
        })
      }
    })
  }

  deleteProduct(c: CartProduct){
    this.selectedProduct = c;
    console.log(this.selectedProduct);
    this.productService.deleteProduct(this.selectedProduct)
    .subscribe(data=>{
      console.log(JSON.stringify(data));
      this.openCart();
    })
  }

  clear(){
    this.productService.clearCart(this.cart_id)
    .subscribe(data=> {
      console.log(data.message)
      this.cart = false;
      this._location.back();
    })
  }
}
