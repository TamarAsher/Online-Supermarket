import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Online-superMarket';
  user: string = "guest";
  isLogin: boolean = false;
  search: string;

  constructor(private customerService : CustomerService, private router: Router, private productService: ProductService){
    
  }

  ngOnInit(){
    this.customerService.isLoggedIn().subscribe()
    this.customerService.dataChanged.subscribe((data)=>{
      if (data && data.isLoggedIn) {
      this.isLogin = true;
      this.user = `${data.first_name} ${data.last_name}`;
      }
      else{
        this.isLogin = false;
        this.user = "guest";
      }
    })
  }

  logout(){
    this.customerService.logout()
    .subscribe((data)=>{
      console.log(data.message);
      this.customerService.isLoggedIn().subscribe()
      this.router.navigate(['/']);
      this.customerService.loginEvent({isLoggedIn: false});
    })
  }

  searchProducts(){
    this.router.navigate(['/categories/search/',this.search]);
  }

}
