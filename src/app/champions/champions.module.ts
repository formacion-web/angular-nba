import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsFormComponent } from './components/champions-form/champions-form.component';
import { MaterialModule } from '../shared/material/material.module';
import { ChampionsComponent } from './pages/champions/champions.component';



@NgModule({
  declarations: [
    ChampionsFormComponent,
    ChampionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ChampionsModule { }
