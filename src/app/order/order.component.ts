import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartProduct } from '../cartProduct';
import { CustomerService } from '../customer.service';
import { Order } from '../order';
import { Observable, of } from "rxjs";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {SearchPipe } from '../search.pipe'


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  carts: CartProduct[];
  totalPrice: number;
  cart_id: number;
  errors: any = {};
  cities: [];
  order: Order = new Order(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  userInfo:any;
  validation: boolean;
  search: any;
  constructor(private productService: ProductService, private customerService : CustomerService, public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    console.log(this.customerService.userInfo)
    this.userInfo = this.customerService.userInfo;
    if (this.userInfo) {
      this.order.customer_id = this.userInfo.customer_id;
    }
    this.customerService.dataChanged.subscribe(data=> {
      this.userInfo = data;
      this.order.customer_id = this.userInfo.customer_id;
    });
    this.order.city = "-1";
    this.openCart();
    this.customerService.getCities()
    .subscribe(value => this.cities = value);
  }

  openCart(){
    this.productService.openCart()
    .subscribe(data=>{
      console.log(data)
      if (data && data.length > 0 && data[0].active == 1) {
        this.cart_id = data[0].cart_id;
        this.order.cart_id = data[0].cart_id;
        console.log("cart ID:"+this.cart_id)
        this.productService.getProductsCart(this.cart_id)
        .subscribe(data=>{
          this.carts = data;
          this.productService.getTotalPrice(this.cart_id)
          .subscribe(data=>{
            console.log("total"+JSON.stringify(data))
            this.totalPrice = data[0].total;
            this.order.total_price = data[0].total;
          });
        })
      }
    })
  }

  autoFill(){
    if (this.userInfo) {
      this.order.city = this.userInfo.city;
      this.order.street = this.userInfo.street;
    }
  }

  validateCreditCardNumber(){
    this.errors.credit_card = undefined;
    var ccNum = this.order.credit_card
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var isValid = false;

    if (visaRegEx.test(ccNum)) {
      isValid = true;
    } else if(mastercardRegEx.test(ccNum)) {
      isValid = true;
    } else if(amexpRegEx.test(ccNum)) {
      isValid = true;
    } else if(discovRegEx.test(ccNum)) {
      isValid = true;
    }
  
    if(isValid) {
      this.errors.credit_card = undefined;
    } else {
      this.errors.credit_card = "Please provide a valid Visa number";
    }
  }
  
  onSelectDate(){
    this.errors.date = undefined;
    this.customerService.checkDate(this.order.shipping_date)
    .subscribe(data=>{
      if (data.length == 3){
        console.log(data)
        this.errors.date = "Please select another day, all shipments are busy";   
      }
    })
  }
  
  orderProducts(){
    this.validation = true;

    this.errors.city = undefined;
    if (!this.order.city || this.order.city == "-1" ) {
      this.errors.city = "Please select a city";
    }

    this.errors.street = undefined;
    if (!this.order.street) {
      this.errors.street = "Please enter a street";
    }
    
    this.errors.date = undefined;
    this.onSelectDate();
    if (!this.order.shipping_date) {
      this.errors.date = "Please select shipping date";
    }

    this.errors.credit_card = undefined;
    this.validateCreditCardNumber();
    if (!this.order.credit_card) {
      this.errors.credit_card = "Please enter a credit card";
    }

    for (const key in this.errors) {
      const element = this.errors[key];
      if(element != undefined){
        this.validation = false;
      }
    }

    if (this.validation) {
      this.order.order_date = new Date();
      console.log(this.order)
      this.customerService.order(this.order)
      .subscribe(data=>{
        console.log(data.message);
        this.order = new Order(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        this.openDialog();
      })
    }  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
