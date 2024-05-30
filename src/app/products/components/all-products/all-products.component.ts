import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { error } from 'node:console';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'] 
})

export class AllProductsComponent implements OnInit {

  loading:boolean  = false

  Products:any[] = []

    constructor(private _ProductsService:ProductsService){}


ngOnInit(): void {
  this.getProduct()
}


  getProduct(){
    this.loading  = true
    this._ProductsService.getAllProducts().subscribe((res:any) =>{
      this.Products  = res; 
      this.loading = false
      console.log(res)
    }, error =>{
      this.loading = false
      console.log(error.message)
    }
  )

  }
}
