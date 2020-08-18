import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  newProduct: Product = new Product(undefined, undefined, undefined, undefined, undefined);
  errors: any = {};
  validation: boolean= true;
  @Input() productToEdit: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.newProduct.product_id = this.productToEdit.product_id;
    this.newProduct.product_name = this.productToEdit.product_name;
    this.newProduct.category_id = this.productToEdit.category_id;
    this.newProduct.price =this.productToEdit.price;
    this.newProduct.img =this.productToEdit.img;

    this.productService.productToEdit.subscribe((product)=>{
      this.newProduct.product_id = product.product_id;
      this.newProduct.product_name = product.product_name;
      this.newProduct.category_id = product.category_id;
      this.newProduct.price =product.price;
      this.newProduct.img =product.img;
    })
    
  }

  update(){
    this.validation = true;
    this.errors.category_id = undefined;
    if (!this.newProduct.category_id || this.newProduct.category_id == -1 ) {
      this.errors.category_id = "Please select category ID";
    }

    this.errors.product_name = undefined;
    if (!this.newProduct.product_name) {
      this.errors.product_name = "Please enter a product name"
    }

    this.errors.price = undefined;
    if (!this.newProduct.price) {
      this.errors.price = "Please enter a price";
    }
  
    this.errors.img = undefined;
    if (!this.newProduct.img) {
      this.errors.img = "Please enter img adress";
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
      console.log(this.newProduct);
      this.productService.update(this.newProduct).subscribe(
      value => {
        console.log("Product Updated");
        console.log(value);
        this.newProduct = new Product(undefined, undefined, undefined, undefined, undefined);
        this.productService.changeProducts();
      },
      reason => {
        console.log("Error Update Product");
        console.log(reason);
        this.errors = reason.error;
      });
    }
  }

}
