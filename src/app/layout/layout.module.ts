import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { TableroComponent } from './tablero/tablero.component';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TableroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ],
  exports:[
    TableroComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
