import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router'; 
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  first_step:boolean = true;
  second_step:boolean =  false;
  newCustomer: Customer = new Customer(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  errors: any = {};
  cities: [];
  validation: boolean= true;


  constructor(private customerService : CustomerService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newCustomer.city = "-1";
    this.customerService.getCities()
    .subscribe(value => this.cities = value);
   
  }
  onKeyID(){
    this.errors.customer_id = undefined;
    this.customerService.validationID(this.newCustomer.customer_id)
    .subscribe(value=>{
      if (value.length>0) {
        this.errors.customer_id = "ID already exist";
      }
    });
    if (`${this.newCustomer.customer_id}`.length< 6) {
      this.errors.customer_id = "ID must contain at least 6 digits";
    }
  }

  onKeyIDMail(){
    this.errors.mail = undefined;
    function ValidateEmail(email:string) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
     var validationMail = ValidateEmail(this.newCustomer.mail);
     if (!validationMail) {
         this.errors.mail = "Invalid email address";
    }
  }
  onKeyFPass(){
    this.errors.password= undefined;

    function validPass(s) {
      var re = /[a-z]\d|\d[a-z]/i;
      return re.test(s) && s.length >= 6;
    }

    var validPassword = validPass(this.newCustomer.password)
    if (!validPassword) {
      console.log(validPassword)
      this.errors.password= "Password must contain at least 6 digits and one letter";
    }

  }

  onKeyLPass(){
    this.errors.repeat_password = undefined;
    if (this.newCustomer.repeat_password != this.newCustomer.password) {
      this.errors.repeat_password = "Passwords do not match";
    }
  }
  

  onCon(){
    this.validation = true;

    this.onKeyID()
    if (!this.newCustomer.customer_id) {
      this.errors.customer_id = "Please enter your ID";
    }

    this.onKeyIDMail();
    if (!this.newCustomer.mail) {
      this.errors.mail = "Please enter your email"
    }

    this.onKeyFPass();
    if (!this.newCustomer.password) {
      this.errors.password="Please enter a password";
    }

    this.onKeyLPass();
    if (!this.newCustomer.repeat_password) {
      this.errors.repeat_password="Please enter the password again";
    }
    
    for (const key in this.errors) {
      const element = this.errors[key];
      if(element != undefined){
        this.validation = false;
        console.log("err:"+element);
      }
    }
    console.log(this.validation);
    console.log(this.errors)
    
    if (this.validation) {
      this.first_step = false;
      this.second_step = true;
    }
  }
    
  

  onAdd(): void{
    this.validation = true;

    this.errors.city = undefined;
    if (!this.newCustomer.city || this.newCustomer.city == "-1") {
      this.errors.city = "Please select a city";
    }

    this.errors.street = undefined;
    if (!this.newCustomer.street) {
      this.errors.street = "Please enter a street";
    }

    this.errors.first_name = undefined;
    if (!this.newCustomer.first_name) {
      this.errors.first_name = "Please enter your first name";
    }
  
    this.errors.last_name = undefined;
    if (!this.newCustomer.last_name) {
      this.errors.last_name = "Please enter your last name";
    }

      for (const key in this.errors) {
        const element = this.errors[key];
        if(element != undefined){
          this.validation = false;
        }
      }
      console.log(this.validation);
      console.log(this.errors);
  
      if (this.validation) {
        console.log(this.newCustomer);
        this.customerService.add(this.newCustomer)
        .subscribe(
        value => {
          console.log("Added");
          console.log(value);
          this.errors = undefined;
          this.openDialog();
        },
        reason => {
          console.log("Error Adding");
          console.log(reason);
          this.errors = reason.error;
        });
      }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRegisterComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
