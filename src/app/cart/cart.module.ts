import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButton,
    MatListModule
  ]
})
export class CartModule { }
