import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'swv-deferrable-views',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './deferrable-views.component.html',
  styles: `
  .logo-wrapper{
  height:1000px
  }
  .logo{
    margin-top: 30%;
  }
  .adev-primary-btn{
    margin-top:20px;
    margin-bottom:20px;
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
export class DeferrableViewsComponent {
  showInfo = false;

  showAdditionalInfo() {
    this.showInfo = true;
  }

}
