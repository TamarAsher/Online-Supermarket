import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Product } from './product';
import { CartProduct } from './cartProduct';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productAdded: EventEmitter<any> = new EventEmitter<any>();
  productToEdit: EventEmitter<any> = new EventEmitter<any>();
  productsChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient, private router: Router) { }


  getProducts(category_id: number): Observable<any> {
    return this.http.get<Product[]>(`/products?category_id=${category_id}`)
  }

  getProductsNum(): Observable<number> {
    return this.http.get<number>(`/productsNumber`)
  }

  getOrdersNum(): Observable<number> {
    return this.http.get<number>(`/ordersNumber`)
  }

  searchProduct(name: string): Observable<any>{
    return this.http.get<Product[]>(`/search?product_name=${name}`)
  }

  openCart() :Observable<any>{
    return this.http.get<any>('/openCart');
  }

  addProductCart(product:Product, cart_id: number): Observable<any>{
    console.log(product, cart_id)
    return this.http.post(`/addProductCart/${cart_id}`, product);
  }

  addCart(): Observable<any>{
    return this.http.get('/addCart');
  }

  getProductsCart(cart_id:number) :Observable<any>{
    return this.http.get<CartProduct[]>(`/productsCart/${cart_id}`)
  }

  getTotalPrice(cart_id:number) :Observable<any>{
    return this.http.get<any>(`/totalPrice/${cart_id}`)
  }

  deleteProduct(product: CartProduct) :Observable<any>{
    var cp_id = product.cp_id;
    return this.http.delete<any>(`/deleteProduct/${cp_id}`)
  }

  add(newProduct:Product) :Observable<any>{
    return this.http.post('/addProduct', newProduct,{responseType: 'text'})
  }

  editEvent(product: Product){
    this.productToEdit.emit(product);
  }

  update(product: Product) :Observable<any>{
    return this.http.post('/updateProduct', product, {responseType: 'text'})
  }

  changeProducts(){
    this.productsChanged.emit();
  }

  clearCart(cart_id) :Observable<any> {
    return this.http.delete(`/clearCart/${cart_id}`)
  }

  public uploadImage(formData): Observable<any> {
    return this.http.post<any>('/api/upload', formData);
  }
}

