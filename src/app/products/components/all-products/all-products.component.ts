import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {

  allProducts:any[] = []

    constructor(private _ProductsService:ProductsService){}


ngOnInit(): void {
  this.getProduct()
}


  getProduct(){
    this._ProductsService.getAllProducts().subscribe((res:any) =>{
      console.log(res)
    })
  }
}
