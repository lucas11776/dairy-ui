import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  backgroundColor: string;
  colors = [{color: '#428bca'}, {color: 'yellow'}, {color: 'limegreen'}, {color: 'hotpink'}];

  constructor() {
    this.backgroundColor = localStorage.getItem('color') ? localStorage.getItem('color') : this.colors[0].color;
  }

}
