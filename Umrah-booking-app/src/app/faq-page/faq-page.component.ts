import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  youMightLikeSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    className: 'custom-slider',
    prevArrow:
      '<button (click)="slickPrev()" class="custom-prev-arrow-you-might-like"><img src="../../assets/images/left-navigate.svg"/></button>',
    nextArrow:
      '<button (click)="slickNext()" class="custom-next-arrow-you-might-like"><img src="../../assets/images/right-navigate.svg"/></button>',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
    ]
  }
}
