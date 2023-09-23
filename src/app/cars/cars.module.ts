import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageChevroletComponent } from './pages/chevrolet.components';
import { ListCarsComponent } from './componetnts/list-cars/list-cars.component';
import { AddModelsComponent } from './componetnts/add-models/add-models.component';




@NgModule({
  declarations: [
    MainPageChevroletComponent,
    ListCarsComponent,
    AddModelsComponent
  ],
  exports:[
    MainPageChevroletComponent
  ],
  imports: [
    CommonModule,
    FormsModule    
  ]
 
})
export class CarsModule { }
