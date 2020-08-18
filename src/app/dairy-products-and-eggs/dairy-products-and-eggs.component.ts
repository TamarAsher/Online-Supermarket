import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dairy-products-and-eggs',
  templateUrl: './dairy-products-and-eggs.component.html',
  styleUrls: ['./dairy-products-and-eggs.component.css']
})
export class DairyProductsAndEggsComponent implements OnInit {
  products: Product[];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productService.productsChanged.subscribe(()=>{
      this.getProducts();
    })
  }

  getProducts(): void {
    this.productService.getProducts(222)
    .subscribe(value=>{
      this.products= value
    });
  }


}
