import { Component, Output, EventEmitter } from '@angular/core';
import { CharactersCars } from '../../interfaces/characters.Cars.interface';

@Component({
  selector: 'app-add-models-cars',
  templateUrl: './add-models.component.html',
  styleUrls: ['./add-models.component.css']
})
export class AddModelsComponent {

  
  public modelsCars : CharactersCars = {
    marca: '',
    version: ''
  }

  @Output()
  onNewCarsEmit : EventEmitter<CharactersCars> = new EventEmitter(); 

  emitAddCars(): void{
    console.log(this.modelsCars);
    
    this.onNewCarsEmit.emit(this.modelsCars);
  }

}
