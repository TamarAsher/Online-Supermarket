import { Component, OnInit, Inject } from '@angular/core';
import { CartProduct } from '../cartProduct';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  carts: CartProduct[];
  totalPrice: number;
  cart_id: number;
  fileUrl;

  constructor( public dialogRef: MatDialogRef<DialogComponent>,
   private router: Router, private productService: ProductService,
    private sanitizer: DomSanitizer) {}


    ngOnInit(): void {
      this.openCart();
    }
  
    openCart(){
      this.productService.openCart()
      .subscribe(data=>{
        console.log(data)
        if (data && data.length > 0) {
          this.cart_id = data[0].cart_id;
          console.log("cart ID:"+this.cart_id)
          this.productService.getProductsCart(this.cart_id)
          .subscribe(data=>{
            this.carts = data;
            this.productService.getTotalPrice(this.cart_id)
            .subscribe(data=>{
              console.log("total"+JSON.stringify(data))
              this.totalPrice = data[0].total;
            });
          })
        }
      })
    }
    onClick(){
      var data = "";
      this.carts.forEach(c=>{
      data+= `Product name: ${c.product_name} \n`;
      data+= `Quantity: ${c.amount} \n`;
      data+= `Price: ${c.total_price}$ \n`
      })
      data+= `\nTotal price: ${this.totalPrice}$`
      const blob = new Blob([data], { type: 'application/octet-stream' });
  
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    }
  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
 

  
}
