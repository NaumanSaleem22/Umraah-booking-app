import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import AOS from "aos";
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-travel-agencies',
  templateUrl: './travel-agencies.component.html',
  styleUrl: './travel-agencies.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelAgenciesComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  tourtypes = [
    { label: 'Religion Tours', checked: false },
    { label: 'Adventure Tours', checked: false },
    { label: 'Cultural Tours', checked: false },
    { label: 'Food Tours', checked: false },
    { label: 'City Tours', checked: false },
    { label: 'Cruises Tours', checked: false }
  ];
  languages = [
    { label: 'Arabic', checked: false },
    { label: 'English', checked: false },
    { label: 'Urdu', checked: false },
    { label: 'Hindi', checked: false },
    { label: 'Russian', checked: false },
    { label: 'Chinese', checked: false }
  ];

  ratings = [
    { imgSrc: '../../assets/images/5-stars.svg', count: '40', checked: false },
    { imgSrc: '../../assets/images/4-stars.svg', count: '24', checked: false },
    { imgSrc: '../../assets/images/3-stars.svg', count: '36', checked: false },
    { imgSrc: '../../assets/images/2-stars.svg', count: '20', checked: false },
    { imgSrc: '../../assets/images/1-star.svg', count: '12', checked: false }
  ];

  prices = [
    { label: '$ 200 - $ 500', value: 'low' },
    { label: '$ 500 - $ 700', value: 'medium' },
    { label: '$ 700 - $ 900', value: 'high' },
    { label: 'Under $ 1000', value: 'very high' },
    { label: 'All', value: 'All' }
  ];
  travelAgencies = [
    { label: 'Travel Agency 1', value: 'agency1' },
    { label: 'Travel Agency 2', value: 'agency2' },
    { label: 'Travel Agency 3', value: 'agency3' },
    { label: 'Travel Agency 4', value: 'agency4' },
    { label: 'Travel Agency 5', value: 'agency5' },
    { label: 'Travel Agency 6', value: 'agency6' }
  ];
  durations = [
    { label: '2 Hours - 5 Hours', value: '2-5' },
    { label: '5 Hours - 10 Hours', value: '5-10' },
    { label: '10 Hours - 15 Hours', value: '10-15' },
    { label: '15 Hours +', value: '15' },
    { label: 'All', value: 'All' }
  ];

  discounts = [
    { label: 'Discounts', value: 'Discounts' },
    { label: 'Limited Edition', value: 'Limited Edition' },
    { label: '50% off', value: '50' }
  ];
  selectedPrice: string = '';
  selectedAgency: string = '';
  selectedDuration: string = '';
  selectedDiscount: string = '';

  updateLabelColor(index: number) {
    this.tourtypes[index].checked = !this.tourtypes[index].checked;
  }
}
