import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-drinks-and-wine',
  templateUrl: './drinks-and-wine.component.html',
  styleUrls: ['./drinks-and-wine.component.css']
})
export class DrinksAndWineComponent implements OnInit {
  products: Product[];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productService.productsChanged.subscribe(()=>{
      this.getProducts();
    })
  }

  getProducts(): void {
    this.productService.getProducts(555)
    .subscribe(value=>{
      this.products= value
    });
    console.log(this.products);
  }

}
