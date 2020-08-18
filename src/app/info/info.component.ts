import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CustomerService } from '../customer.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  products_num:number;
  orders_num:number ;
  isLogin: boolean = false;
  open_cart: boolean = false;
  last_purchase: boolean = false;
  new_user: boolean = true;
  cart: Cart[];
  date: Date;
  total_price: number;
  last:any;

  constructor(private productService: ProductService, private customerService : CustomerService) { }

  ngOnInit() {
    this.getProductNum();
    this.getOrderNum();
    this.openCart();
    
    this.customerService.dataChanged
    .subscribe((data)=>{
      if (data && data.isLoggedIn){
        this.isLogin = true
        this.openCart()
      }
      else
      this.isLogin = false;
    });
  }

  getProductNum(){
    this.productService.getProductsNum()
    .subscribe(value=>this.products_num= value);
  }

  getOrderNum(){
    this.productService.getOrdersNum()
    .subscribe(value=>this.orders_num= value);
  }

  openCart(){
    this.productService.openCart()
    .subscribe(data=>{
      if (data && data.length != 0 && data[0].active == 1){
        this.productService.getProductsCart(data[0].cart_id)
        .subscribe(products=>{
          if (products.length > 0) {
            this.open_cart = true;
            this.new_user = false;
            this.last_purchase = false;
            this.date = data[0].date;
            this.productService.getTotalPrice(data[0].cart_id)
            .subscribe(data=>{
              console.log("total"+JSON.stringify(data))
              this.total_price = data[0].total;
           });
          }
          else{
            this.new_user = true;
            this.open_cart = false;
            this.last_purchase = false
          }
        })
      }
      else{
        if (data && data.length !=0 && data[0].active == 0) {
          this.customerService.getLast().subscribe(data=>{
            console.log(data)
            this.last = data[0];
            this.last_purchase = true;
            this.new_user = false;
            this.open_cart = false;
          })
          
        }
        else
        this.new_user = true;
        this.open_cart = false;
        this.last_purchase = false
      }
    })
  }

}
