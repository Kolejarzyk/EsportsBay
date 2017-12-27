import { Component, OnInit } from '@angular/core';
import { animation } from '@angular/core/src/animation/dsl';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'imagesslider',
  templateUrl: './imagesslider.component.html',
  styleUrls: ['./imagesslider.component.css']
})
export class ImagessliderComponent implements OnInit {

  public imageSources: string[] = 
  [
    'https://i.ytimg.com/vi/8jsdGzfufDE/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Qn6_O_fAMhM/maxresdefault.jpg',
    'https://i.ytimg.com/vi/u_8q0pBbUpE/maxresdefault.jpg',
    'https://i.ytimg.com/vi/YZ-yC5Aedys/maxresdefault.jpg'
  ];
  public carouselOne: NgxCarousel;
  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  public myfunc(event: Event) {
  }

  

}
