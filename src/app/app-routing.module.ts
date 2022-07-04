import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PriceListComponent} from "./price-list/price-list.component";
import {BidsComponent} from "./bids/bids.component";
import {NewBidComponent} from "./bids/new-bid/new-bid.component";

const routes: Routes = [
  {path: 'price-list', component: PriceListComponent},
  {path: 'bids', component: BidsComponent,
    children: [
      {path: 'new', component: NewBidComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
