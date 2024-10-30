import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as sharedModule from './shared/shared.module';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SharedModule as SharedModule } from "./shared/shared.module";
import { ProductsModule } from './products/products.module';

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
        SharedModule,
        NgIf,
        NgFor,
        ProductsModule
    ]
})
export class AppModule { }
