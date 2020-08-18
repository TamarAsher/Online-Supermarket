import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;
  cart_id: number;
  manager: boolean;
  done: boolean;

  constructor(private productService: ProductService, private customerService : CustomerService) { }

  ngOnInit(): void {
    this.product.quantity = 1
    this.openCart();
    this.customerService.isLoggedIn().subscribe(data=>{
      if (data.user && data.user.manager == 1) {
        this.manager = true;
      }
      else
      this.manager = false;
    })
  }
  
  openCart(){
    this.productService.openCart()
    .subscribe(data=>{
      if (data && data.length != 0 && data[0].active == 1) {
        this.cart_id = data[0].cart_id;
      }
      else{
        console.log("error in cart ID")
      }
    })
  }

  add(){
    this.productService.openCart()
    .subscribe(data=>{
      console.log(data)
      if (data && data.length != 0 && data[0].active == 1) {
        this.cart_id = data[0].cart_id;
        console.log("cart ID:"+this.cart_id)
        if (this.cart_id) {
          this.productService.addProductCart(this.product, this.cart_id)
          .subscribe(data=>{
            console.log(JSON.stringify(data))
            this.productService.productAdded.emit();
            this.done = true;
            setTimeout(()=>{  
              this.done = false;
         }, 2000);
          });
        }
      } 
        else{
          this.productService.addCart()
          .subscribe(data=>{
            console.log("add cart:"+ data.message);
            this.productService.openCart()
            .subscribe(data=>{
              console.log(data)
              if (data && data.length != 0 && data[0].active == 1) {
              this.cart_id = data[0].cart_id;
              console.log("cart ID:"+this.cart_id)
              this.productService.addProductCart(this.product, this.cart_id)
              .subscribe(data=>{
                console.log(JSON.stringify(data))
                this.productService.productAdded.emit();
                this.done = true;
                setTimeout(()=>{  
                  this.done = false;
                }, 2000);
              });
            }
           })   
          }) 
        }
      })  
  }

  edit(){
    console.log(this.product);
    this.productService.editEvent(this.product);
  }


}
