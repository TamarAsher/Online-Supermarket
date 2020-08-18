import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Product[]
  quantity: number = 1;
  show_message: boolean = true;
  searchStr: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchStr = params['str'];
      console.log(this.searchStr)
      this.productService.searchProduct(this.searchStr)
    .subscribe(products=> {
        if (products && products.length >0) {
        this.products = products;
        this.show_message = false;
      }
      else
      this.show_message = true;
    })
    });
  }

 

}
