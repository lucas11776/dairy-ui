import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  backgroundColor: string;
  color = [{color: '#428bca'}, {color: 'yellow'}, {color: 'limegreen'}, {color: 'hotpink'}];

  constructor() {}
}
