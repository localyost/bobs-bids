import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
    declarations: [
        ToolBarComponent
    ],
    exports: [
        ToolBarComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class ComponentsModule { }
