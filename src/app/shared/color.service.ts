import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  color: Subject<string>;
  colors = [
    {color: '#428bca'},
    {color: 'gold'},
    {color: 'limegreen'},
    {color: 'hotpink'}
  ];

  constructor() {
    this.color = new Subject<string>();
    setInterval(() => this.color.next(localStorage.getItem('color')), 100);
  }

  /**
   * Change global
   */
  change(color: string) {
    localStorage.setItem('color', color);
    this.color.next(color);
  }
}
