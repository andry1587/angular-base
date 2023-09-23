import { Injectable } from '@angular/core';
import { CharactersCars } from '../interfaces/characters.Cars.interface';
import {v4 as uuid } from 'uuid' ;

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public modelCarsInterface : CharactersCars []=[{
    idCars: uuid(),
    marca: 'Chevrolet',
    version: 'premier',

},{
    idCars: uuid(),
    marca: 'Chevrolet',
    version: 'ltz',
}];
 
public onNewCarsAddService( modelsCars: CharactersCars): void{

  const newCars : CharactersCars = { idCars: uuid(), ...modelsCars};

    console.log(newCars);

  this.modelCarsInterface.push(newCars);
}

/*public onDeletedCarChild(value:number){
    this.modelCarsInterface.splice(value, 1);
}*/
public onDeleteCarsByIdService( id: string){
  this.modelCarsInterface = this.modelCarsInterface.filter( modelCarsInterface => modelCarsInterface.idCars !== id);
}

  constructor() { }
}
