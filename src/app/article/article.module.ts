import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import { EditFenceTypeComponent } from './edit-fence-type/edit-fence-type.component';
import {RouterTestingModule} from "@angular/router/testing";



@NgModule({
  declarations: [
    ArticleComponent,
    EditFenceTypeComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    RouterTestingModule
  ]
})
export class ArticleModule { }
