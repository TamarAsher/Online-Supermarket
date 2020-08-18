import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  start: string = "Start Shopping";
  isLogin: boolean = false;
  userName: string;
  password: string;
  errors: any = {}
  manager: boolean;

  constructor(private customerService : CustomerService, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.customerService.dataChanged.subscribe((data)=>{
      if (data && data.isLoggedIn) {
        this.openCart();
      }
      else
      this.isLogin = false;
    })
  }

  login(){
    this.isLogin = false; 
    this.errors.login="";
    this.customerService.login(this.userName, this.password)
    .subscribe(
      res=>{
        console.log("res:"+JSON.stringify(res))
        console.log(res.data)
        if (res.data) {
          if (res.data.manager == 1) {
            this.manager = true;
              console.log("You are Manager");
              this.router.navigate(['/categories/fruitsAndVagetables']);
          }
              this.isLogin = true;
              console.log("session"+JSON.stringify(res.data));
              this.customerService.loginEvent(res.data);
              this.userName = undefined;
              this.password = undefined;  
        }
        else
        this.errors.login = "Wrong username or password";
      },
      reason => {
        console.log("Login Error");
        console.log(reason);
      });
  }

  openCart(){
    this.productService.openCart()
    .subscribe(data=>{
      if (data && data.length != 0 && data[0].active == 1) {
        this.productService.getProductsCart(data[0].cart_id)
        .subscribe(data=>{
          if (data.length > 0) {
            this.isLogin = true;
            this.start = "Continue shopping";  
          }
          else{
            this.isLogin = true;
            this.start = "Start shopping";
          }
        })
      }
      else{
        this.isLogin = true;
        this.start = "Start shopping";
      }
  })
}
  

}
