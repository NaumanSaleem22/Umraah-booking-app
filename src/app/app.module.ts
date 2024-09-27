import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelAgenciesComponent } from './travel-agencies/travel-agencies.component';
import { PackagesListingComponent } from './packages-listing/packages-listing.component';
import { TravelAgencyPaymentComponent } from './travel-agency-payment/travel-agency-payment.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FaqPageComponent,
    DetailsPageComponent,
    TravelAgenciesComponent,
    PackagesListingComponent,
    TravelAgencyPaymentComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
