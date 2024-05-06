import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../../models/product';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductServiceService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(p => {
        this.products = p;
        this.filteredProducts = p;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product).subscribe(() =>
      this.snackBar.open(`Added ${product.name} to cart`, "", {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      })
    );
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products
      .filter(p => p.name.toLowerCase().includes(searchTerm));
  }
}
