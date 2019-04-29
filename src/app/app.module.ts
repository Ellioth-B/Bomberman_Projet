import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GameComponent } from './game/game.component';
import { CharacterComponent } from './character/character.component';
import { GameStateService } from './game-state.service';
import { GameloopService } from './gameloop.service';
import { Win1Component } from './win1/win1.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GameComponent,
    CharacterComponent,
    Win1Component


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [GameStateService, GameloopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
