import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
data: any;

@Input()  Data:any = {}

  constructor(){}

  ngOnInit(): void {
    
  }

}
