import { Component, inject } from '@angular/core';
import { DecimalPipe, NgIf } from '@angular/common';

import { CartService } from '../cart.service';

@Component({
  selector: 'sw-cart-total',
  standalone: true,
  imports: [DecimalPipe, NgIf],
  templateUrl: './cart-total.component.html'
})
export class CartTotalComponent {
  cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

  totalPrice = this.cartService.totalPrice;
  
}
