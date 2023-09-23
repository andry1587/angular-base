import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroModule } from './hereos/appHeroModule';
import { CarsModule } from './cars/cars.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
