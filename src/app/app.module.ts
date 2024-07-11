import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as sharedModule from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { SharedModule as SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
       
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        sharedModule.SharedModule
    ]
})
export class AppModule { }
