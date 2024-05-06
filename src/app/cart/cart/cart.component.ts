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
  totalPrice: number = 0;

  constructor (private cartService: CartService) {}

  ngOnInit(): void {
      this.cartService.getCartItems()
        .subscribe(i => {
          this.cartItems = i;
          this.totalPrice = this.cartService.calculatePrice(i);
      });
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(() =>
      console.log("Cart cleared")
    );
  }

  checkout(): void {
    this.cartService.checkoutCart(this.cartItems).subscribe(() =>
      console.log("Cart checked out")
    );
  }
}
