import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  playVideo(event: Event) {
    event.stopPropagation();
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.style.display = 'block';
    video.play();
  }
  slideConfig = {
    infinite: true,
    slidesToShow: 6.2,
    slidesToScroll: 2,
    dots: false,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          dots: false, prevArrow: false,
          nextArrow: false
        }
      },
    ]
    // prevArrow:
    //   '<button (click)="slickPrev()" class="custom-prev-arrow"><img src="../../assets/images/prev-arrow.svg"/></button>',
    // nextArrow:
    //   '<button (click)="slickNext()" class="custom-next-arrow"><img src="../../assets/images/next-arrow.svg"/></button>',
  };
  slideConfig2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,

  };
  topDestinationSlider = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow:
      '<button (click)="slickPrev()" class="custom-prev-arrow-destination"><img src="../../assets/images/left-navigate.svg"/></button>',
    nextArrow:
      '<button (click)="slickNext()" class="custom-next-arrow-destination"><img src="../../assets/images/right-navigate.svg"/></button>',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
    ]
  }
}
