import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig} from 'angular4-carousel';
import { animation } from '@angular/core/src/animation/dsl';

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

  public config: ICarouselConfig = 
  {
      verifyBeforeLoad: true,
      log: false,
      animation: true,
      animationType: AnimationConfig.SLIDE,
      autoplay: true,
      autoplayDelay: 3000,
      stopAutoplayMinWidth: 768
  };
  constructor() { }

  ngOnInit() {
  }

  

}
