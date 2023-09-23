import { Component } from '@angular/core';
import { CharactersCars } from '../interfaces/characters.Cars.interface';
import { CarsService } from '../services/cars.service.ts.service';

@Component({
    selector: 'app-chevrolet-page',
    templateUrl: './chevrolet.components.html'
})

export class MainPageChevroletComponent {

    constructor(private carsService : CarsService) {}
    
    get gettersCars(): CharactersCars[]{
        return [...this.carsService.modelCarsInterface];
    }

    onDeleteCarsById (id: string){
        this.carsService.onDeleteCarsByIdService(id);
    }

    onNewCarsAdd (characterCars: CharactersCars){
        this.carsService.onNewCarsAddService(characterCars);
    }   

}