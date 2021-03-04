import { environment } from './../../environments/environment';
import { IProduct } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // http://localhost:3000/
  host = environment.host;

  constructor(private http: HttpClient) { }

  // Get all Products from server 
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.host);
  }

  // Get all Products with query IsSelected = true 
  getSelectedProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.host}/products?IsSelected=true`);
  }

  // Get all Products with query IsAvailable = true 
  getAvailabeProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.host}/products?IsAvailable=true`);
  }
}
