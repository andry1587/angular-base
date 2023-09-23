import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-counter',
    templateUrl: 'counter.component.html',
})

export class CounterComponent {
    
    titulo: string = 'Counter';
    numero: number = 10;
    numero_5: number = 10;
    base: number = 5;
  
    sumar(){
      this.numero +=1;  
    }
  
    restar(){
      this.numero -=1;  
    }
  
    acumular(value: number){
      this.numero += value;
    }
  
    acumular5(value: number){
      this.numero_5 += value;
    }

    reset (){
        this.numero_5 = 10;
    }
  
  

}