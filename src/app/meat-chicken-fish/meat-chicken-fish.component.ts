import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-meat-chicken-fish',
  templateUrl: './meat-chicken-fish.component.html',
  styleUrls: ['./meat-chicken-fish.component.css']
})
export class MeatChickenFishComponent implements OnInit {
  products: Product[];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productService.productsChanged.subscribe(()=>{
      this.getProducts();
    })
  }

  getProducts(): void {
    this.productService.getProducts(444)
    .subscribe(value=>{
      this.products= value
    });
    console.log(this.products);
  }


}
