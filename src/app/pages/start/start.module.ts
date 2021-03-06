import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { RouterModule, Routes } from '@angular/router';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { OfferModalComponent } from './components/offer-modal/offer-modal.component';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  declarations: [
    StartComponent,
    MatchesTableComponent,
    CouponComponent,
    OfferModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ],
  bootstrap: [StartComponent]
})
export class StartModule { }
