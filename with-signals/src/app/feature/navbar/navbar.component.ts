import { Component, computed, inject } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'swv-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: `
  .nav-link {
    font-size: large;
    cursor: pointer;
  }
  
  .navbar-light .navbar-nav .nav-link.active {
    color: #007ACC
  }
  
  .navbar-brand {
    margin-left: 10px;
  }
  `,
})

export class NavbarComponent {
  pageTitle = 'Angular v17 Features and Enhancement';
  cartService = inject(CartService);

  cartCount = computed(() =>
    this.cartService.cartItems().reduce((acc, item) => acc + item.quantity, 0)
  );
}
