import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 
  public valuedelete?: string = "";
  listHero: string [] = ["Matojo", "Buss Bunny", "Bluey"];
  form: any;

  deleteHero() : void{
    this.valuedelete = this.listHero.pop();
    console.log(this.valuedelete);
  }

  resetHerosOrigin():void{
    this.listHero = ["Matojo", "Buss Bunny", "Bluey"];    
  }

}
