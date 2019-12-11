import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product) {
    window.alert('Votre produit a bien été ajouter au panier');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

}