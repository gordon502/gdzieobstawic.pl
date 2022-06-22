import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { RouterModule, Routes } from '@angular/router';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { CouponComponent } from './components/coupon/coupon.component';

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
    CouponComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [StartComponent]
})
export class StartModule { }
