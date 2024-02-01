import { Component } from '@angular/core';

@Component({
  selector: 'sw-footer-component',
  standalone: true,
  styles : `
  .card{
    padding: 24px;

  }
  .detail{
    margin-top:10px;
    font-size: 20px;
  }
  `,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
}
