import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'swv-feature',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './feature.component.html',
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
export class FeatureComponent {}
