import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PriceListComponent} from "./price-list/price-list.component";
import {BidsComponent} from "./bids/bids.component";
import {NewBidComponent} from "./bids/new-bid/new-bid.component";
import {CreatePriceListComponent} from "./price-list/create-price-list/create-price-list.component";
import {ArticleComponent} from "./article/article.component";
import {EditFenceTypeComponent} from "./article/edit-fence-type/edit-fence-type.component";

const routes: Routes = [
  {path: 'price-list', component: PriceListComponent,
    children: [
      { path: 'new', component: CreatePriceListComponent }
    ]
  },
  {path: 'bids', component: BidsComponent,
    children: [
      { path: 'new', component: NewBidComponent}
    ]
  },
  { path: 'articles', component: ArticleComponent,
    children: [
      { path: ':id', component: EditFenceTypeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
