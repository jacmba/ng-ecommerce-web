import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(p => this.products = p);
  }
}
