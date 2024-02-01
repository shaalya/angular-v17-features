import {
  CommonModule,
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
  provideImageKitLoader,
} from '@angular/common';
import { Component } from '@angular/core';

export interface imageInfo {
  id: string;
  url: string;
}

@Component({
  selector: 'swv-images',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [
    provideImageKitLoader('https://ik.imagekit.io/arungudelli/'),
    // Can also create a custom loader
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     return `http://localhost:4200/assets/${config.src}`;
    //   },
    // },
  ],
  templateUrl: './images.component.html',
  styles: `
 img{
    max-width: 100%;
    height: auto;
}`,
})
export class ImagesComponent {
  imageUrls: imageInfo[] = [];

  randomContent = '';

  constructor() {
    for (let i = 1; i < 7; i++) {
      this.imageUrls.push({
        id: 'class-' + i,
        url: i + '-' + '4000x3000_ag.jpg',
      });
    }

    this.randomContent =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  }
}
