import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  imports: [FooterComponent, NgOptimizedImage],
  styles: `
  .card-body {
    margin : 10%;
  }
  .img-responsive{
    max-height: 300px;
     padding-bottom: 50px
  }
  .adev-primary-btn{
    margin-top:20px;
    cursor: pointer;
    outline: none;
    position: relative;
    border-radius: 0.25rem;
    padding: 0.75rem 1.5rem;
    width: max-content;
    --angle: 90deg;
    border-color : #EADE44;
    border-color: oklch(69.02% .277 332.77);
}`,
})
export class HomeComponent {
 
}
