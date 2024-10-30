import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

@Input()  data:any = {}

  constructor(){  }

  ngOnInit(): void {
    
  }

}
