import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private customerService : CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.isLoggedIn().subscribe(data=>{
      if (data.user && data.user.manager == 1) {
        console.log("You are Manager")
        this.router.navigate(['/categories/fruitsAndVagetables']);
      }
    })
  }

}
