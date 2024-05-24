import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient:HttpClient) { }

  getAllProducts(){
      return this.HttpClient.get('https://fakestoreapi.com/products')
  }
}
