import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-bakery-and-bread',
  templateUrl: './bakery-and-bread.component.html',
  styleUrls: ['./bakery-and-bread.component.css']
})
export class BakeryAndBreadComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productService.productsChanged.subscribe(()=>{
      this.getProducts();
    })
  }

  getProducts(): void {
    this.productService.getProducts(333)
    .subscribe(value=>{
      this.products= value
    });
    console.log(this.products);
  }

}
