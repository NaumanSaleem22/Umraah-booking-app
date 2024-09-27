import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import AOS from "aos";
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsPageComponent implements OnInit {
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
