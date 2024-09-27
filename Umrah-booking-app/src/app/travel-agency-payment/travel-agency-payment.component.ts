import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-travel-agency-payment',
  templateUrl: './travel-agency-payment.component.html',
  styleUrl: './travel-agency-payment.component.scss'
})
export class TravelAgencyPaymentComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  isLoggedIn = false;
}
