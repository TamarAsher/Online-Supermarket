import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Customer } from './customer';
import { Data } from '@angular/router';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  dataChanged: EventEmitter<any> = new EventEmitter<any>();
  userInfo: any;


  constructor(private http: HttpClient) { }

  login(userName, pass): Observable<any>{
    var user = {mail: userName, password: pass}
    return this.http.post(`/login`, user)
  }

  getCities(): Observable<any> {
    return this.http.get('/cities')
  }

  
  add(newCustomer: Customer): Observable<any>{
    return this.http.post('/newCustomer', newCustomer, {responseType: 'text'});
  }

  validationID(customer_id: number): Observable<any>{
    return this.http.get(`/customers/${customer_id}`);
  }
  
  loginEvent(data): void {
    this.userInfo = data;
    this.dataChanged.emit(data);
  }

  isLoggedIn() :Observable<any>{
    return this.http.get<any>("/authguard", {withCredentials: true})
    .pipe(
      tap((data) => {
        if(data.user && data.user.isLoggedIn){
          this.loginEvent(data.user);
        }
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  
  }

  logout() :Observable<any>{
    return this.http.get<any>("/logout", {withCredentials: false});
  }

  checkDate(date: Date)  :Observable<any>{
    return this.http.get<any>(`/date/${date}`)
  }

  order(order: Order) :Observable<any>{
    return this.http.post('/order', order)
  }

  getLast() :Observable<any>{
    return this.http.get<any>('/lastPurchase');
  }
}
