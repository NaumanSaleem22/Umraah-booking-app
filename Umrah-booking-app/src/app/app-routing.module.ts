import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { TravelAgenciesComponent } from './travel-agencies/travel-agencies.component';
import { PackagesListingComponent } from './packages-listing/packages-listing.component';
import { TravelAgencyPaymentComponent } from './travel-agency-payment/travel-agency-payment.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'travel-agencies', component: TravelAgenciesComponent },
  { path: 'packages-listing', component: PackagesListingComponent },
  { path: 'travel-agencies-payment', component: TravelAgencyPaymentComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'faq', component: FaqPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
