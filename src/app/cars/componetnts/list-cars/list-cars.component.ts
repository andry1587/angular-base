import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharactersCars } from '../../interfaces/characters.Cars.interface';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent {

  constructor() { }

  @Input()
  public charactersList: CharactersCars[] = [];

  @Output()
  public onDeletedCar: EventEmitter<string> = new EventEmitter();

  public onDeleteCarButton (id?: string){

    if(!id) return;

    this.onDeletedCar.emit(id);
    
  }


}
