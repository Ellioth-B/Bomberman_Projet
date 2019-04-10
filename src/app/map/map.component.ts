import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  border = {
    textureUrl : "",
    breakable : false,
    powerUp : false
  }

  floor = {
    textureUrl : "",
    breakable : false,
    powerUp : false
  }

  wallFix = {
    textureUrl : "",
    breakable : false,
    powerUp : false
  }

  wallDestrutible = {
    textureUrl : "",
    breakable : true,
    powerUp : true
  }

  map = 
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,0],
    [0,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1,0],
    [0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
  constructor() { }

  ngOnInit() {
  }

}
