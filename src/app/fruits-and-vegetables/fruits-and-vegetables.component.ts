import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-fruits-and-vegetables',
  templateUrl: './fruits-and-vegetables.component.html',
  styleUrls: ['./fruits-and-vegetables.component.css']
})
export class FruitsAndVegetablesComponent implements OnInit {
  products: Product[];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productService.productsChanged.subscribe(()=>{
      this.getProducts();
    })
  }

  getProducts(): void {
    this.productService.getProducts(111)
    .subscribe(value=>{
      this.products= value;
      console.log(this.products);
    });
  }

}
