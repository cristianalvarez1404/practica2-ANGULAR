import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'

  constructor(private _httpClient:HttpClient) {}

  public getProducts():Observable<IProduct[]>{
    //const params = sort ? `?sort=${sort}` : ''; 
    // return this._httpClient.get<IProduct[]>(`${this.baseURL}${params}`);
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }

  public getProductById(id:number | string):Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`)
  }

  public getCategories(category:string):Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`)
  }

  public postProduct(product:IProduct):Observable<IProduct>{
    return this._httpClient.post<IProduct>(this.baseURL,product);
  }

}
