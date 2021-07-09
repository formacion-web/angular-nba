import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ]
})
export class MaterialModule { }
