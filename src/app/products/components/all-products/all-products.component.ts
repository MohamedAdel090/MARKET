import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { error } from 'node:console';

@Component({
  selector: 'app-all-products',
  templateUrl:'./all-products.component.html',
  styleUrls: ['./all-products.component.scss'] 
})

export class AllProductsComponent implements OnInit {

  loading:boolean  = false

  Products:any[] = []

  categories:any[] = []

    constructor(private _ProductsService:ProductsService){}


ngOnInit(): void {
  this.getProduct()
  this.getCategories()
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
      alert(error)
    }
  )

  }
  getCategories(){
    this.loading  = true
    this._ProductsService.getAllCategories().subscribe((res:any) =>{
      this.categories  = res; 
      this.loading = false
      console.log(res)
    }, error =>{
      this.loading = false
      console.log(error.message)
      alert(error)
    }
  )

  }

  filterCategory(event:any){
     this.loading  = true
    let value = event.target.value
    if(value == "All"){
      this.getProduct()
    }
    else{
      this.loading = false
          this.getProductCategories(value)

    }

    
  }
  getProductCategories(keyeword:string){
       this.loading  = true
    this._ProductsService.getProductByCategoreis(keyeword).subscribe(
      (res:any) =>{
        this.Products = res
        this.loading = false
      }
    )
  }
} 
