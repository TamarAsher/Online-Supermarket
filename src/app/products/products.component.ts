import { Component, OnInit, Output } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  display: boolean = false;
  manager: boolean;
  edit: boolean;
  add: boolean;
  productToEdit: Product;
  products: Product[];
  search:boolean = false;

  constructor(private customerService : CustomerService, private productService: ProductService) { }

  ngOnInit(): void {
    this.customerService.isLoggedIn().subscribe(data=>{
      console.log(data)
      if (data.user && data.user.manager == 1) {
        this.manager = true;
      }
      else
      this.manager = false;
    })
    this.productService.productsChanged.subscribe(()=>{
      this.edit = false;
      this.add = false;
    })
    this.productService.productToEdit.subscribe((product: Product)=>{
      console.log(product)
      if (product) {
        this.productToEdit = product;
        this.edit = true;
        this.add = false;
      }
    })
  }

  goCart(){
    console.log(this.manager)
    if (this.display)
      this.display = false
    else
    this.display = true;
  }

  addProduct(){
    this.add = true;
    this.edit = false;
  }

  hideSearch(){
    this.search = false;
  }
}
