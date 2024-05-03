import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];

  constructor (private cartService: CartService) {}

  ngOnInit(): void {
      this.cartService.getCartItems()
        .subscribe(i => this.cartItems = i);
  }
}
