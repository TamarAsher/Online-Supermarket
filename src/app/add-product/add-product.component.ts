import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder } from '@angular/forms';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProduct: Product = new Product(undefined, undefined, undefined, undefined, undefined);
  errors: any = {};
  validation: boolean= true;
  uploadedFiles: File;
  uploaded: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.newProduct.category_id = -1;
  }

  fileChange(element){
    if (element.target.files.length>0) {
      this.uploadedFiles = element.target.files[0];
    }
  }

  upload(){
    this.errors.img = undefined;
    if (!this.uploadedFiles) {
      this.errors.img = "Please choose a file";
    }
    else{
      let formData = new FormData();
      formData.append('image', this.uploadedFiles)
      this.productService.uploadImage(formData)
      .subscribe((response)=>{
        console.log(response)
        var url = response.path;
        this.newProduct.img = url;
        console.log(this.newProduct.img)
        console.log('response receved is ', response);
        this.uploaded = true
      })
    }
    
  }

  add(){
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
      this.errors.img = "Please upload a file";
    }

    for (const key in this.errors) {
      const element = this.errors[key];
      if(element != undefined){
        this.validation = false;
      }
    }
    console.log(this.validation);
    console.log(this.errors);
    console.log(this.newProduct)

    if (this.validation) {
      console.log(this.newProduct);
      this.productService.add(this.newProduct)
      .subscribe(
      value => {
        console.log("Product Added");
        console.log(value);
        this.newProduct = new Product(undefined, undefined, undefined, undefined, undefined);
        this.productService.changeProducts();
      },
      reason => {
        console.log("Error Adding Product");
        console.log(reason);
        this.errors = reason.error;
      });
    }
  }
}
