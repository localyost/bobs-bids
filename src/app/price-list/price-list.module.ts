import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from './price-list.component';
import { CreatePriceListComponent } from './create-price-list/create-price-list.component';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    PriceListComponent,
    CreatePriceListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule
  ]
})
export class PriceListModule { }
