import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
