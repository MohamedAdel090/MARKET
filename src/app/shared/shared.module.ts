import { AllProductsComponent } from './../products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgFor,
  
  ],
  exports: [
    HeaderComponent,
    
  ]
})
export class SharedModule { }
