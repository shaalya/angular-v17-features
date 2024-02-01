import { Component, computed, inject } from '@angular/core';

import { CartService } from './feature/cart/cart.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'swv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {}
