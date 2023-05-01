import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name: String = "Ironman";
  age: number = 45;

  get capitalizaName(){
    return this.name.toUpperCase();
  }

  changeName():void{
     this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 26;
  }

  changeReset():void{
    this.name = "Ironman";
    this.age = 45;
  }

}
