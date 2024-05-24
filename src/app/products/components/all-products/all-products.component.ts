import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'] 
})

export class AllProductsComponent implements OnInit {


  Products:any[] = []

    constructor(private _ProductsService:ProductsService){}


ngOnInit(): void {
  this.getProduct()
}


  getProduct(){
    this._ProductsService.getAllProducts().subscribe((res:any) =>{
      this.Products= res  
      console.log(res)
    })
  }
}
