import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {


  baseUri:string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create service
  createService(data): Observable<any> {
    let url = `${this.baseUri}/services/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all services
  getServices() {
    return this.http.get(`${this.baseUri}/services`);
  }

  // Get service
  getService(id): Observable<any> {
    let url = `${this.baseUri}/services/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update service
  updateService(id, data): Observable<any> {
    let url = `${this.baseUri}/services/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete service
  deleteService(id): Observable<any> {
    let url = `${this.baseUri}/services/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  //-------------------start orders----------------------

  // Create order
 createOrder(data): Observable<any> {
  let url = `${this.baseUri}/orders/create`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

// Get all orders
getOrders() {
  return this.http.get(`${this.baseUri}/orders`);
}

// Get order
getOrder(id): Observable<any> {
  let url = `${this.baseUri}/orders/read/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

// Update order
updateOrder(id, data): Observable<any> {
  let url = `${this.baseUri}/orders/update/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

// Get last order
getLastOrder(): Observable<any> {
  let url = `${this.baseUri}/orders/getLastOrder`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

// Delete order
deleteOrder(id): Observable<any> {
  let url = `${this.baseUri}/orders/delete/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

//------end orders---------------

//-------------------start customers----------------------

  // Create customer
 createCustomer(data): Observable<any> {
  let url = `${this.baseUri}/customers/create`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

// Get all customer
getCustomers() {
  return this.http.get(`${this.baseUri}/customers`);
}

// Get customer
getCustomer(id): Observable<any> {
  let url = `${this.baseUri}/customers/read/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

// Get last customer
getLastCustomer(): Observable<any> {
  let url = `${this.baseUri}/customers/getLast`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

// Update customer
updateCustomer(id, data): Observable<any> {
  let url = `${this.baseUri}/customers/update/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

// Delete customers
deleteCustomer(id): Observable<any> {
  let url = `${this.baseUri}/customers/delete/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

  //------end customers---------------

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
